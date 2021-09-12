import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import IconI from 'react-native-vector-icons/Ionicons';
import IconMCI from 'react-native-vector-icons/MaterialCommunityIcons';

import Styles from './styles';

interface IMyPageHeader {
  navigation: any;
  title: string;
}

const MyPageHeader = ({ title, navigation }: IMyPageHeader) => {
  return (
    <View style={Styles.container}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={Styles.goBackContainer}>
        <IconI name="arrow-back-sharp" size={25} color="#C8D2F5" />
      </TouchableOpacity>
      <View style={Styles.titleContainer}>
        <Text style={Styles.titleText}>{title}</Text>
      </View>
      <View style={Styles.buttonsContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('MyPageSettings')} style={Styles.button}>
          <IconI name="settings" size={25} color="#C8D2F5" />
        </TouchableOpacity>
        <TouchableOpacity style={Styles.button}>
          <IconMCI name="dots-horizontal" size={30} color="#C8D2F5" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MyPageHeader;
