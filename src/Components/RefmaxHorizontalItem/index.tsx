import moment from 'moment';
import React from 'react';
import {Image, SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import {IRef} from '../../Helpers/Interfaces';
import IconMI from 'react-native-vector-icons/MaterialIcons';

import Styles from './styles';

interface IRefmaxHorizontalItem {
  refmax: IRef;
  navigation: any;
}
const getStatusText = (status: number) => {
  if (status === 1) {
    return 'ILANDA';
  } else if (status === 2) {
    return 'SATILDI';
  }
};

const RefmaxHorizontalItem = ({refmax, navigation}: IRefmaxHorizontalItem) => {
  return (
    <SafeAreaView
      style={[
        Styles.container,
        refmax.premium ? {backgroundColor: '#FCFAB0'} : null,
      ]}>
      <TouchableOpacity
        onPress={() => navigation.push('RefPage', {Ref: refmax})}
        style={Styles.subContainer}>
        <View style={Styles.imageContainer}>
          <Image style={Styles.image} source={{uri: refmax.images[0]}} />
          {refmax.status !== 0 && refmax.status ? (
            <View style={Styles.statusContainer}>
              <Text style={Styles.statusText}>
                {getStatusText(refmax.status)}
              </Text>
            </View>
          ) : null}
        </View>
        <View style={Styles.textContainer}>
          <Text style={Styles.title}>{refmax.title}</Text>
          <Text style={Styles.description}>{refmax.description}</Text>
          <View style={{flex: 1}}></View>
          <View style={Styles.addressContainer}>
            <View style={Styles.adressSubContainer}>
              <Text style={Styles.addressText}>
                {refmax.state + ',' + refmax.district}
              </Text>
              <Text style={Styles.addressText}>
                {moment(refmax.date).format('DD MMMM, HH:mm')}
              </Text>
            </View>
            <View style={Styles.buttonsContainer}>
              <TouchableOpacity>
                <View style={Styles.buttonContainer}>
                  <IconMI
                    name="favorite"
                    size={23}
                    color={'#3996E3'}
                    style={Styles.favoriteButtom}
                  />
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View style={Styles.buttonContainer}>
                  <IconMI name="more-horiz" size={23} color={'black'} />
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default RefmaxHorizontalItem;
