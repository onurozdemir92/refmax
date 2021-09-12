import React, { useEffect } from 'react';
import { SafeAreaView, StatusBar, Text, View, Image } from 'react-native';
import changeNavigationBarColor from 'react-native-navigation-bar-color';
import Colors from '../Theme/Colors';
import Styles from './styles';

const SplashScreen = ({ navigation }) => {

  const navbar = async () => {
    await changeNavigationBarColor(Colors.MainColor, false, false);
  }
  useEffect(() => {
    navbar();
    let timer;
    timer = setTimeout(() => {
      clearTimeout(timer);
      navigation.navigate('Home');
    }, 2000);
  });
  return (
    <View style={Styles.container}>
      <StatusBar
        backgroundColor={Colors.MainColor}
      />
      <Image resizeMode='contain' style={{ width: 100, height: 100 }} source={require('../../../assets/images/logoBeyaz.png')} />
    </View>
  );
};

export default SplashScreen;
