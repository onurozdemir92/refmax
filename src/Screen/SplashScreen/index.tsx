import React, {useEffect} from 'react';
import {SafeAreaView, StatusBar, Text} from 'react-native';
import Styles from './styles';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    let timer;
    timer = setTimeout(() => {
      clearTimeout(timer);
      navigation.navigate('Home');
    }, 1000);
  });
  return (
    <SafeAreaView style={Styles.container}>
      <StatusBar backgroundColor="#F44336" barStyle="light-content" />
      <Text style={Styles.logoText}>jetmio</Text>
    </SafeAreaView>
  );
};

export default SplashScreen;
