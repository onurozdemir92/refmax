import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons'
import { SafeAreaView, Text, TextInput, View } from 'react-native';
import Styles from './styles'
import Colors from '../Theme/Colors';


const Search = () => {
  return (
    <SafeAreaView style={Styles.container}>
      <View style={Styles.searchContainer}>
        <View style={Styles.textInputContainer}>
          <Icon style={Styles.searchIcon} name='search' size={18} color={Colors.textGray} />
          <TextInput returnKeyLabel='Ara' returnKeyType='search' placeholder='Arama' style={Styles.textInput} />
        </View>
      </View>
      <Text>arama</Text>
    </SafeAreaView>
  );
};

export default Search;
