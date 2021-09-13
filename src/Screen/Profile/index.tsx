import React, { useEffect, useState } from 'react'
import { View, Text, SafeAreaView, ScrollView, Image } from 'react-native';
import auth from '@react-native-firebase/auth';
import { getUserInfo } from '../../Helpers/Api/User';
import IconI from 'react-native-vector-icons/Ionicons';

import Styles from './styles'



type TProfile = 'shop' | 'normal';
const Profile = ({ navigation, route }) => {

    const [profileState, setProfileState] = useState<TProfile>(null)
    const [myProfile, setMyProfile] = useState<boolean>(false);


    const userId = route?.params?.userId;

    const getProfiloInfo = async () => {
        const user = await getUserInfo(userId);
        console.log('profile geleln ', userId)
        if (user) {
            setProfileState(user.profileType === 'shop' ? 'shop' : 'normal')
        }
    }

    useEffect(() => {
        getProfiloInfo();
        if (auth()?.currentUser) {
            if (auth()?.currentUser.uid === userId) {
                setMyProfile(true)
            } else {
                setMyProfile(false)
            }
        } else {
            setMyProfile(false)

        }
    }, [])




    return (
        <SafeAreaView style={Styles.container}>
            {profileState === 'normal' ? <ScrollView><View style={Styles.profileContainer}>
                <Image
                    style={Styles.image}
                    source={{
                        uri:
                            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHByb2ZpbGV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
                    }}
                />
                <View style={Styles.nameContainer}>
                    <Text style={Styles.nameText}>Onur Rahmi Özdemir</Text>
                    <IconI name="shield-checkmark" size={20} color="#6DB56A" />
                </View>
                <View style={Styles.commentContainer}>
                    <View style={Styles.starsContainer}>
                        <IconI name="star" size={20} color="#F2BE24" />
                        <IconI name="star" size={20} color="#F2BE24" />
                        <IconI name="star" size={20} color="#F2BE24" />
                        <IconI name="star" size={20} color="#F2BE24" />
                        <IconI name="star" size={20} color="#F2BE24" />
                    </View>
                    <Text>3 yorum</Text>
                </View>
                <Text>Haziran 2021' den beri</Text>
            </View></ScrollView>
                :
                <Text>shop</Text>}
        </SafeAreaView>
    )
}

export default Profile
