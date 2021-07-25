import React from 'react';
import {View, Text} from 'react-native';
import Styles from './styles';



const FirstSliderContainer = () => {
  return (
    <View style={Styles.container}>
      <View style={Styles.subContainer}>
        <Text>Yakınında binlerce iş var!</Text>
      </View>
    </View>
  );
};

export default FirstSliderContainer;
