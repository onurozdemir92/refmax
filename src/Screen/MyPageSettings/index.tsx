import React, { useEffect, useState } from 'react'
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { View, Text, SafeAreaView, TouchableOpacity, Image, ScrollView, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Styles from './styles'
import Colors from '../Theme/Colors';
import commonStyles from '../Theme/CommonStyles';
import moment from 'moment';
import { getUserInfo } from '../../Helpers/Api/User';

interface IUserInfo {
    adress: string;
    firstname: string;
    lastname: string;
    userId: string;
}

const MyPageSettings = ({ navigation }) => {
    const [userDates, setUserDates] = useState<FirebaseAuthTypes.UserMetadata>();
    const [photeUrl, setPhotoUrl] = useState<string>();
    const [phoneNumber, setPhoneNumber] = useState<string>();
    const [email, setEmail] = useState<string>();
    const [userInfo, setUserInfo] = useState<IUserInfo>();

    const getUserInfoData = async (userId: string) => {
        const user = await getUserInfo(userId);
        if (user) {
            setUserInfo(user);
        }
        else {
            console.log('user info : ', user)
        }

    }


    useEffect(() => {
        if (auth()?.currentUser) {
            const user = auth().currentUser;
            setUserDates(user.metadata);
            setPhotoUrl(user.photoURL);
            setEmail(user.email)
            getUserInfoData(user.uid)
        } else {
            navigation.navigate('Login', { to: 'MyPageSettings' });
        }

    }, [])


    return (
        <SafeAreaView style={Styles.container}>
            <View style={commonStyles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={commonStyles.goBackButton}>
                    <Icon name='arrow-back' size={20} color={Colors.MainColor} />
                </TouchableOpacity>
                <Text>Kullanıcı Bilgileriniz</Text>
            </View>


            <ScrollView>
                <View style={Styles.profileInfoContainer}>
                    <View style={Styles.profileImageContainer}>
                        <View>
                            {photeUrl ?
                                <Image style={Styles.image} source={{ uri: photeUrl }} />
                                : <View style={[Styles.image, { alignItems: 'center', justifyContent: 'center' }]}>
                                    <Icon name='person' size={20} color={Colors.MainColor} />
                                </View>}
                            <View style={Styles.photoEditButtonContainer}>
                                <TouchableOpacity style={Styles.editButton}><Icon name='pencil' size={15} color={'white'} /></TouchableOpacity>
                            </View>
                        </View>
                        <View style={Styles.createdDateContainer}>
                            <Text style={Styles.createdText}>{moment(userDates?.creationTime).format('DD MMMM yyyy')}' den beri</Text>
                        </View>
                    </View>

                </View>

                <View style={Styles.inputContainer}>
                    <TouchableOpacity style={Styles.itemItemContainer}>
                        <Text style={Styles.itemItemTitleText}>E-mail</Text>
                        {email ? <Text style={Styles.itemItemCenterText}>{email}</Text> : <Text style={[Styles.itemItemCenterText, { color: Colors.textGray }]}>Eklenmedi</Text>}

                        <Icon name='ios-chevron-forward-outline' size={20} color={Colors.arrowGray} />

                    </TouchableOpacity>
                    <TouchableOpacity style={Styles.itemItemContainer}>
                        <Text style={Styles.itemItemTitleText}>Telefon</Text>
                        {phoneNumber ? <Text style={Styles.itemItemCenterText}>+90 543 258 78 01</Text> : <Text style={[Styles.itemItemCenterText, { color: Colors.textGray }]}>Eklenmedi</Text>}

                        <Icon name='ios-chevron-forward-outline' size={20} color={Colors.arrowGray} />

                    </TouchableOpacity>
                    <TouchableOpacity style={Styles.itemItemContainer}>
                        <Text style={Styles.itemItemTitleText}>Adres</Text>
                        {userInfo?.adress ? <Text style={Styles.itemItemCenterText}>{userInfo.adress}</Text> : <Text style={[Styles.itemItemCenterText, { color: Colors.textGray }]}>Eklenmedi</Text>}

                        <Icon name='ios-chevron-forward-outline' size={20} color={Colors.arrowGray} />

                    </TouchableOpacity>

                </View>
            </ScrollView>

        </SafeAreaView>
    )
}

export default MyPageSettings;
