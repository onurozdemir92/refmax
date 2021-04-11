import React from 'react';
import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Styles from './styles';

const MyPage = () => {
  return (
    <SafeAreaView style={Styles.container}>
      <View style={Styles.header}>
        <View style={Styles.headerTitleContainer}>
          <Text style={Styles.headerTitleText}>Profile</Text>
        </View>
        <TouchableOpacity>
          <View style={Styles.iconContainer}>
            <Icon name="settings" size={23} color="black" />
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default MyPage;
