import React from 'react';
import {View, Text} from 'react-native';
import IconI from 'react-native-vector-icons/Ionicons';
import IconMI from 'react-native-vector-icons/MaterialIcons';

import Colors from '../../Screen/Theme/Colors';
import Styles from './styles';

const ProductSeenInfo = () => {
  return (
    <View style={Styles.container}>
      <View style={Styles.subContainer}>
        <View style={Styles.iconTextContainer}>
          <IconI name="eye" size={25} color={Colors.seenComponentIcon} />
          <Text style={Styles.text}>623</Text>
        </View>
        <View style={Styles.iconTextContainer}>
          <IconMI name="favorite" size={25} color={Colors.seenComponentIcon} />
          <Text style={Styles.text}>24</Text>
        </View>
        <View style={Styles.iconTextContainer}>
          <Text style={Styles.text}>10 gün sonra kaldırılacak</Text>
        </View>
      </View>
    </View>
  );
};

export default ProductSeenInfo;
