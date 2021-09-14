import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { SafeAreaView, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { getShareDates } from '../../Helpers/Api';
import { getCatagories } from '../../Helpers/Api/Categories';
import auth from '@react-native-firebase/auth';

import Styles from './styles';
import SingInComponent from '../../Components/SingInComponent';

const SharePage = ({ navigation }) => {
  const [data, setData] = useState<any>([]);
  const [accountState, setAccountState] = useState<boolean>();


  const getCategoryData = async () => {
    const categories = await getCatagories();
    setData(categories)
    console.log('categories ', categories)
  }
  const accountControl = () => {

    auth().onAuthStateChanged((user) => {
      if (user) {
        setAccountState(true)
      }
      else {
        setAccountState(false)
      }
    })

  }

  useEffect(() => {
    accountControl();
    getCategoryData();
  }, []);
  if (accountState) {
    return (
      <SafeAreaView style={Styles.container}>
        <View style={Styles.categoryContainer}>
          {data.map(item => (
            <TouchableOpacity
              key={item.Id}
              onPress={() => navigation.goBack()}
              style={[Styles.button, { backgroundColor: item.color }]}>
              <Text style={Styles.buttonText}>{item.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate('Home')}
          style={[Styles.button, { marginTop: 20 }]}>
          <Icon name="chevron-down-outline" size={20} color="white" />
        </TouchableOpacity>
      </SafeAreaView>
    );
  } else {
    return (<SingInComponent to='Share' navigation={navigation} />)
  }
};

export default SharePage;
