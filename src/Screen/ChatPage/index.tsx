import React, { useEffect, useState } from 'react';
import { SafeAreaView, ScrollView, Text, View, Image, TouchableOpacity, FlatList } from 'react-native';
import Colors from '../Theme/Colors';
import auth from '@react-native-firebase/auth';

import Styles from './styles';
import SingInComponent from '../../Components/SingInComponent';
import { getChatItems } from '../../Helpers/Api/ChatItem';
import { BannerAd, BannerAdSize, TestIds } from '@react-native-firebase/admob';
import firestore from '@react-native-firebase/firestore';
import { getProductInfo } from '../../Helpers/Api/Product';
import ChatItemComponent from '../../Components/ChatItemComponent';

const ChatPage = ({ navigation }) => {


  const [accountState, setAccountState] = useState<boolean>();
  const [chatItems, setChatItems] = useState<any>();


  const accountControl = () => {

    return auth().onAuthStateChanged(async (user) => {
      if (user) {
        setAccountState(true);
        return firestore().collection('productChatItem').where('users', 'array-contains', user.uid)
          .onSnapshot(async (response) => {
            let data = [];
            await response.docs.map(async (item) => {

              data.push(item.data())

            }
            )
            setChatItems(data.sort(((a, b) => { return new Date(b.createdAt) - new Date(a.createdAt) })))
          })
      }

      else {
        setAccountState(false)
      }
    })

  }

  useEffect(() => {

    const unsubscribe = accountControl()
    return () => unsubscribe()
  }, [])


  if (accountState) {
    return (
      <SafeAreaView style={Styles.container}>
        <View style={Styles.headerContainer}>
          <Text style={Styles.headerTitle}>Konuşmalar</Text>
        </View>
        <BannerAd
          unitId={TestIds.BANNER}
          size={BannerAdSize.ADAPTIVE_BANNER}

          requestOptions={{
            requestNonPersonalizedAdsOnly: true,
          }} />
        <FlatList
          data={chatItems}
          renderItem={(item) =>
            <ChatItemComponent item={item.item} id={item.index} key={item.index} />
          }

        />
      </SafeAreaView>
    );
  } else {
    return (<SingInComponent to='Go' navigation={navigation} />)
  }
};

export default ChatPage;
