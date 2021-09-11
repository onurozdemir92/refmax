import React, { useState } from 'react'
import { View, Text, SafeAreaView, TouchableOpacity, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import Colors from '../Theme/Colors';
import auth from '@react-native-firebase/auth';

import Styles from './styles';

const Login = ({ navigation, route }) => {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const { to } = route.params;


    const singIn = () => {
        auth().signInWithEmailAndPassword(email, password).then((e) => { console.log('girişden dönen : ', e); to ? navigation.replace(to) : navigation.replace('MyPage') }).catch((err) => console.log('errr : ', err))
        console.log('giriş bilgileri : ', email, password)
    }

    return (
        <SafeAreaView style={Styles.container}>
            <View style={Styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={Styles.goBackButton}>
                    <Icon name='arrow-back' size={20} color={Colors.MainColor} />
                </TouchableOpacity>
                <Text>Giriş bilgilerinizi yazınız</Text>

            </View>
            <View style={Styles.inputContainer}>
                <View style={Styles.textInputContainer}>
                    <TextInput onChangeText={(e) => setEmail(e)} keyboardType='email-address' autoFocus placeholder='E-mail'></TextInput>
                </View>
                <View style={Styles.textInputContainer}>
                    <TextInput onChangeText={(e) => setPassword(e)} secureTextEntry placeholder='Şifre'></TextInput>
                </View>

            </View>
            <TouchableOpacity onPress={() => singIn()} style={Styles.singInButton}>
                <Text style={Styles.singInButtonText}>Giriş Yap</Text>
            </TouchableOpacity>


        </SafeAreaView>
    )
}

export default Login