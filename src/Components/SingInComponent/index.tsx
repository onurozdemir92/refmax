import React from 'react'
import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import Styles from './styles'

interface ISingInComponent {
    to: string;
    navigation: any;
}

const SingInComponent = ({ to, navigation }: ISingInComponent) => {
    return (
        <SafeAreaView style={[Styles.container, { justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }]}>
            <Text style={Styles.alertText}>Önce Giriş Yapın</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Login', { to: to })} style={Styles.loginGoButton}>
                <Text style={Styles.loginGoText}>Giriş Yap</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

export default SingInComponent;
