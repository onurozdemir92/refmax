import React, { useEffect, useState } from 'react'
import { View, Text, SafeAreaView, TouchableOpacity, Image, TextInput, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import ChatingComponent from '../../Components/ChatingComponent';
import Colors from '../Theme/Colors';

import Styles from './styles'

const Chating = ({ navigation }) => {


    const [messages, setMessages] = useState<any[]>();
    const [text, setText] = useState<string>();
    const send = () => {
        if (text !== '') {

            setMessages(t => [{ userId: '1', date: new Date(), text: text }, ...t]);
            setText('');
        }
    }



    const data = [
        { userId: '1', text: 'merhaba', date: new Date() },
        { userId: '2', text: 'selam', date: new Date() },
        { userId: '2', text: 'Bu kazağın bedeni ne ?', date: new Date() },
        { userId: '1', text: 'Hangi renk bu Kazak', date: new Date() },
        { userId: '2', text: 'Sanane lan', date: new Date() },
        { userId: '1', text: 'Sus be', date: new Date() },
        { userId: '2', text: 'Görmüyormusun salak yazıyor orada kendin baksana gerize kalı mal ', date: new Date() },
        { userId: '2', text: 'sanane lan istediğimi yazarın sanamı soruca ', date: new Date() },
        { userId: '1', text: 'hadi lan oradan', date: new Date() },
        { userId: '1', text: 'hebele hüvelle', date: new Date() },
        { userId: '2', text: 'bişeyler flan', date: new Date() },
        { userId: '1', text: 'öyle böyle işte', date: new Date() },
        { userId: '2', text: 'Görmüyormusun salak yazıyor orada kendin baksana gerize kalı mal ', date: new Date() },
        { userId: '2', text: 'sanane lan istediğimi yazarın sanamı soruca ', date: new Date() },
        { userId: '1', text: 'hadi lan oradan', date: new Date() },
        { userId: '1', text: 'hebele hüvelle', date: new Date() },
        { userId: '2', text: 'bişeyler flan', date: new Date() },
        { userId: '1', text: 'öyle böyle işte', date: new Date() },
        { userId: '2', text: 'Görmüyormusun salak yazıyor orada kendin baksana gerize kalı mal ', date: new Date() },
        { userId: '2', text: 'sanane lan istediğimi yazarın sanamı soruca ', date: new Date() },
        { userId: '1', text: 'hadi lan oradan', date: new Date() },
        { userId: '1', text: 'hebele hüvelle', date: new Date() },
        { userId: '2', text: 'bişeyler flan', date: new Date() },
        { userId: '1', text: 'öyle böyle işte', date: new Date() },
    ]
    useEffect(() => {
        setMessages(data)

    }, [])

    return (
        <SafeAreaView style={Styles.container}>

            <View style={Styles.headerContainer}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={Styles.backButton}>
                    <Icon name='ios-arrow-back-outline' size={25} color={Colors.MainColor} />
                </TouchableOpacity>
                <Text style={Styles.headerTitle}>Onur Rahmi Özdemir</Text>
                <Image source={{ uri: 'https://images.unsplash.com/photo-1532074205216-d0e1f4b87368?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHByb2ZpbGV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' }} style={Styles.userAvatar} />
            </View>

            <TouchableOpacity activeOpacity={0.5} style={Styles.productContainer}>
                <Image source={{ uri: 'https://productimages.hepsiburada.net/s/48/200-200/10940273852466.jpg' }} style={Styles.productImage} />

                <View style={Styles.productInfoContainer}>
                    <Text style={Styles.productTitle}>Rabot Süpürge</Text>
                    <Text style={Styles.productDescription}>fakir süpürge en iyisi</Text>
                </View>

            </TouchableOpacity>



            <View style={Styles.messagesContainer}>
                <FlatList
                    inverted
                    data={messages}
                    renderItem={({ item, index }) => <ChatingComponent item={item} />}
                    keyExtractor={(item, index) => index.toString()}
                />

            </View>





            <View style={Styles.messageInputContainer}>
                <TextInput value={text} onChangeText={(e) => setText(e)} placeholder='mesaj Yaz...' multiline style={Styles.messageInput} />
                <TouchableOpacity onPress={() => send()} style={Styles.sendButton}>
                    <Icon name='send' size={25} color={'white'} />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default Chating
