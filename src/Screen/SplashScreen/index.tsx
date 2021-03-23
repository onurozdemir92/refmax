import React from 'react';
import {SafeAreaView,StatusBar} from 'react-native';
import Styles from './styles';

const SplashScreen = () => {
  return <SafeAreaView style={Styles.container}>
    <StatusBar backgroundColor='#3996E3' barStyle='light-content' />
  </SafeAreaView>;
};

export default SplashScreen;
