import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import Iicon from 'react-native-vector-icons/Ionicons';
import Micon from 'react-native-vector-icons/MaterialIcons';

import Colors from '../../Screen/Theme/Colors';
import Styles from './styles';

interface IFirstPageHeader {
  avatar: string;
  navigation: any;
}

const FirstPageHeader = ({avatar, navigation}: IFirstPageHeader) => {
  avatar =
    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHByb2ZpbGV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60';
  return (
    <View style={Styles.container}>
      <View style={Styles.leftContainer}>
        <View style={Styles.leftSubContainer}>
          <View style={Styles.logo}>
            <Text>JetMio</Text>
          </View>
          <TouchableOpacity style={Styles.locationContainer}>
            <Iicon name="location" size={17} color={Colors.locationColors} />
            <Text style={Styles.locationText}>Ankara, Yenikent</Text>
            <Micon
              name="keyboard-arrow-down"
              size={17}
              color={Colors.locationColors}
            />
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate('MyPage')}
        style={Styles.rightContainer}>
        {avatar ? (
          <Image
            style={Styles.imageContainer}
            source={{
              uri: avatar,
            }}
          />
        ) : (
          <View style={Styles.imageContainer}>
            <Text style={Styles.imageText}>OR</Text>
          </View>
        )}
      </TouchableOpacity>
    </View>
  );
};

export default FirstPageHeader;
