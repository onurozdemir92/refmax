import React from 'react';
import { View, Image, TouchableOpacity, Text } from 'react-native';
import { IProduct, IRef } from '../../Helpers/Interfaces';
import IconI from 'react-native-vector-icons/Ionicons';
import IconMCI from 'react-native-vector-icons/MaterialCommunityIcons';

import Styles from './styles';
import Colors from '../../Screen/Theme/Colors';

interface IRefmaxItem {
  item: IProduct;
  onRefPress: Function;
}

const RefmaxItem = ({ item, onRefPress }: IRefmaxItem) => {
  console.log('aaaaaa ',item)

  return (
    <TouchableOpacity
      onPress={() => onRefPress()}
      activeOpacity={0.7}
      style={Styles.container}>
      <View style={Styles.subContainer}>
        <View style={Styles.imageContainer}>
          <Image
            resizeMode="contain"
            style={Styles.image}
            source={{ uri: item?.productImages[0] }}
          />
        </View>
        <View style={Styles.infoContainer}>
          <View style={Styles.infoTextContainer}>
            <Text style={Styles.titleText}>{item.productTitle}</Text>
            <Text style={Styles.priceText}>{item.productPrice} ₺</Text>
            <Text style={Styles.locationText}>
              {item.productCity + ', ' + item.productDistrict}
            </Text>
            <Text style={Styles.locationText}>{'Bugün, 20:01'}</Text>
          </View>
          <View style={Styles.infoButtonContainer}>
            <TouchableOpacity>
              <IconI
                name="heart-outline"
                size={25}
                color={Colors.locationColors}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <IconMCI
                name="dots-horizontal"
                size={25}
                color={Colors.dotsButtons}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default RefmaxItem;
