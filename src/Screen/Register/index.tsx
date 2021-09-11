import React, { useState } from 'react'
import { View, Text, SafeAreaView, TouchableOpacity, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import auth from '@react-native-firebase/auth';
import Styles from './styles'
import Colors from '../Theme/Colors'

const Register = ({ navigation }) => {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [passwordAgain, setPasswordAgain] = useState<string>('')


    const register = () => {

        if (password === passwordAgain) {

            auth().createUserWithEmailAndPassword(email, password)
                .then((e) => {
                    console.log('kayıt başarılı : ', e);
                    // auth().sendSignInLinkToEmail(e.user.email)
                    //     .then((e) => console.log('email gönderildi : ', e))
                    //     .catch((err) => console.log('mail gönderilirken hata oluştu : ', err));
                    navigation.replace('Home');
                })
                .catch((err) => console.log('kayıt yapılırken hata oluştu : ', err))

        } else {
            alert('Şifreler birbiri ile aynı olmalıdır')
        }

    }


    return (
        <SafeAreaView style={Styles.container}>
            <View style={Styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={Styles.goBackButton}>
                    <Icon name='arrow-back' size={20} color={Colors.MainColor} />
                </TouchableOpacity>
                <Text>Kayıt olmak için bilgilerinizi girin</Text>

            </View>
            <View style={Styles.inputContainer}>
                <View style={Styles.textInputContainer}>
                    <TextInput onChangeText={(e) => setEmail(e)} keyboardType='email-address' autoFocus placeholder='E-mail'></TextInput>
                </View>
                <View style={Styles.textInputContainer}>
                    <TextInput onChangeText={(e) => setPassword(e)} secureTextEntry placeholder='Şifre'></TextInput>
                </View>

                <View style={Styles.textInputContainer}>
                    <TextInput onChangeText={(e) => setPasswordAgain(e)} secureTextEntry placeholder='Şifre Tekrar'></TextInput>
                </View>

                <View style={Styles.registerLinkContainer}>
                    <TouchableOpacity onPress={() => navigation.replace('Login', { to: 'MyPage' })}><Text style={Styles.registerLinkText}>Giriş Ekranına Git</Text></TouchableOpacity>
                </View>



            </View>
            <TouchableOpacity onPress={() => register()} style={Styles.singInButton}>
                <Text style={Styles.singInButtonText}>Kayıt ol</Text>
            </TouchableOpacity>


        </SafeAreaView>
    )
}

export default Register
