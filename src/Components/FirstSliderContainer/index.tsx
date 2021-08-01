import React from 'react';
import {View, Text, Image} from 'react-native';
import Styles from './styles';

const FirstSliderContainer = () => {
  return (
    <View style={Styles.container}>
      <View style={Styles.subContainer}>
        <Text>Yakınında binlerce iş var!</Text>
        <Image
          style={{width: 85, height:55}}
          source={{
            uri:
              'https://images.pexels.com/photos/1083822/pexels-photo-1083822.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
          }}
        />
      </View>
    </View>
  );
};

export default FirstSliderContainer;
