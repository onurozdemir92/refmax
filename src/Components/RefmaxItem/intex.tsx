import React from 'react';
import {View, Image, TouchableOpacity, Text} from 'react-native';
import {IRef} from '../../Helpers/Interfaces';
import IconI from 'react-native-vector-icons/Ionicons';
import IconMCI from 'react-native-vector-icons/MaterialCommunityIcons';

import Styles from './styles';
import Colors from '../../Screen/Theme/Colors';

interface IRefmaxItem {
  refmax: IRef;
  onRefPress: Function;
}

const RefmaxItem = ({refmax, onRefPress}: IRefmaxItem) => {
  return (
    <TouchableOpacity style={Styles.container}>
      <View style={Styles.subContainer}>
        <View style={Styles.imageContainer}>
          <Image
            resizeMode="cover"
            style={Styles.image}
            source={{uri: refmax.images[0]}}
          />
        </View>
        <View style={Styles.infoContainer}>
          <View style={Styles.infoTextContainer}>
            <Text style={Styles.titleText}>Akıllı Saat</Text>
            <Text style={Styles.priceText}>3500 ₺</Text>
            <Text style={Styles.locationText}>Ankara, Kızılay</Text>
            <Text style={Styles.locationText}>Bugün, 00:20</Text>
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
