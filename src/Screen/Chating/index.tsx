import React from 'react'
import { View, Text, SafeAreaView, TouchableOpacity, Image, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import Colors from '../Theme/Colors';

import Styles from './styles'

const Chating = ({ navigation }) => {
    return (
        <SafeAreaView style={Styles.container}>

            <View style={Styles.headerContainer}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={Styles.backButton}>
                    <Icon name='ios-arrow-back-outline' size={25} color={Colors.MainColor} />
                </TouchableOpacity>
                <Text style={Styles.headerTitle}>Onur Rahmi Özdemir</Text>
                <Image source={{ uri: 'https://images.unsplash.com/photo-1532074205216-d0e1f4b87368?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHByb2ZpbGV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' }} style={Styles.userAvatar} />
            </View>
            <View style={Styles.messagesContainer}>

            </View>
            <View style={Styles.messageInputContainer}>
                <TextInput placeholder='mesaj Yaz...' multiline style={Styles.messageInput} />
                <TouchableOpacity style={Styles.sendButton}>
                    <Icon name='send' size={25} color={'white'} />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default Chating
