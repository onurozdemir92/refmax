import React, {useEffect} from 'react';
import {SafeAreaView, StatusBar, Text, View} from 'react-native';
import Colors from '../Theme/Colors';
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
    <View style={Styles.container}>
      <StatusBar
        showHideTransition="slide"
        backgroundColor={Colors.MainColor}
      />
      {/* <Text style={Styles.logoText}>jetmio</Text> */}
    </View>
  );
};

export default SplashScreen;
