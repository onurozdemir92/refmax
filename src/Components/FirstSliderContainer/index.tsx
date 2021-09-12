import React from 'react';
import { View, Text, Image } from 'react-native';
import Styles from './styles';

const FirstSliderContainer = () => {
  return (
    <View style={Styles.container}>
      <View style={Styles.subContainer}>
        <Text>Yakınında binlerce iş var!</Text>
        <Image
          resizeMode='contain'
          style={{ width: 85, height: '100%' }}
          source={require('../../../assets/images/logo.png')}
        />
      </View>
    </View>
  );
};

export default FirstSliderContainer;
