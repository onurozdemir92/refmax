import React from 'react';
import {Text, TextInput, Touchable, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Styles from './styles';

const SearchHeader = () => {
  return (
    <View style={Styles.container}>
      <View style={Styles.inputContainer}>
        <TextInput placeholder={'Ara'} style={Styles.textInput} />
      </View>
      <TouchableOpacity style={Styles.locationContainer}>
        <Text>Ankara</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SearchHeader;
