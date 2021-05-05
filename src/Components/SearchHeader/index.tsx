import React from 'react';
import {Text, TextInput, Touchable, View, ViewBase} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Feather';
import Colors from '../../Screen/Theme/Colors';
import Styles from './styles';

const SearchHeader = () => {
  return (
    <View style={Styles.container}>
      <View style={Styles.subContainer}>
        <View style={Styles.inputContainer}>
          <TextInput placeholder={'Ara'} style={Styles.textInput} />
        </View>
        <TouchableOpacity style={Styles.locationContainer}>
          <Icon name="sliders" size={20} color={Colors.ChatColor} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SearchHeader;
