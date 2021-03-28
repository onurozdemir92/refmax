import React from 'react';
import {View, Image, TouchableOpacity, Text} from 'react-native';
import {IRef} from '../../Helpers/Interfaces';
import IconMI from 'react-native-vector-icons/MaterialIcons';
import Styles from './styles';

interface IRefmaxItem {
  refmax: IRef;
  onRefPress: Function;
}

const RefmaxItem = ({refmax, onRefPress}: IRefmaxItem) => {
  return (
    <View
      style={[
        Styles.container,
        refmax.premium ? {borderColor: '#C5EC31', borderWidth: 2} : null,
      ]}>
      <TouchableOpacity
        onPress={() => onRefPress(refmax)}
        style={Styles.refContainer}>
        <View style={Styles.imageContainer}>
          <Image
            resizeMode="cover"
            source={{uri: refmax.images[0]}}
            style={Styles.image}
          />
        </View>
        <View style={Styles.titleContainer}>
          <View style={Styles.titleSubContainer}>
            <Text style={Styles.titleText}>
              Kiralık Ev balkonlu ii katlı ne arasan o da buda şuda
            </Text>
          </View>
          <View style={Styles.buttonsContainer}>
            <TouchableOpacity>
              <IconMI
                name="favorite"
                size={23}
                color={'#3996E3'}
                style={Styles.favoriteButtom}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <IconMI name="more-horiz" size={23} color={'black'} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={Styles.priceContainer}>
          <Text style={Styles.priceText}>1300 ₺</Text>
        </View>
        <View style={Styles.stateContainer}>
          <Text style={Styles.stateText}>Ankara/Etimesgut</Text>
        </View>
        <View style={Styles.dateContainer}>
          <Text style={Styles.dateText}>8 Kasım, 20:15</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default RefmaxItem;
