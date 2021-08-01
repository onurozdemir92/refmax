import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import IconI from 'react-native-vector-icons/Ionicons';
import IconMCI from 'react-native-vector-icons/MaterialCommunityIcons';

import Styles from './styles';

interface IProductPageHeader {
  navigation?: any;
}

const ProductPageHeader = ({navigation}: IProductPageHeader) => {
  return (
    <View style={Styles.container}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={Styles.button}>
        <IconI name="arrow-back-sharp" size={25} color="#C8D2F5" />
      </TouchableOpacity>
      <TouchableOpacity style={Styles.button}>
        <IconMCI name="dots-horizontal" size={30} color="#C8D2F5" />
      </TouchableOpacity>
    </View>
  );
};

export default ProductPageHeader;
