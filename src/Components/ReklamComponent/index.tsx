import React from 'react';
import {View, Image, TouchableOpacity, Text} from 'react-native';
import {IRef} from '../../Helpers/Interfaces';
import IconMI from 'react-native-vector-icons/MaterialIcons';
import Styles from './styles';

interface IReklamComponent {
  refmax: IRef;
  onRefPress: Function;
}

const ReklamComponent = ({refmax, onRefPress}: IReklamComponent) => {
  return (
    <View
      style={[
        Styles.container,
        refmax.premium ? {backgroundColor: '#FCFAB0'} : null,
      ]}>
      <TouchableOpacity
        activeOpacity={0.95}
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
              rrrrrr Kiralık Ev balkonlu ii katlı ne arasan o da buda şuda
            </Text>
          </View>
          {/* <View style={Styles.buttonsContainer}>
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
          </View> */}
        </View>
        <View style={Styles.priceContainer}>
          <Text style={Styles.stateText}>{refmax.description}</Text>
        </View>
        <View style={Styles.stateContainer}>
          <Text style={Styles.urlText}>{refmax.urlText}</Text>
        </View>
        <View style={Styles.dateContainer}>
          <Text style={Styles.dateText}>Daha Fazla</Text>
        </View>
      </TouchableOpacity>
      <View style={Styles.reklamContainer}>
        <Text style={Styles.reklamText}>Reklam</Text>
      </View>
    </View>
  );
};

export default ReklamComponent;
