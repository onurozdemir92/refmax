import React from 'react';
import {View} from 'react-native';
import {SafeAreaView, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Styles from './styles';

const SharePage = ({navigation}) => {
  const data = [
    {id: 1, name: 'Emlak', color: '#FF5733'},
    {id: 2, name: 'Vasıta', color: '#771AF7'},
    {id: 3, name: 'Yedek Parça', color: '#717371'},
    {id: 4, name: 'İş', color: '#900C3F'},
    {id: 5, name: 'Hayvan', color: '#53D811'},
    {id: 6, name: 'Hizmet', color: '#4097EE'},
  ];

  return (
    <SafeAreaView style={Styles.container}>
      <View style={Styles.categoryContainer}>
        {data.map(item => (
          <TouchableOpacity
            key={item.id}
            onPress={() => navigation.goBack()}
            style={[Styles.button, {backgroundColor: item.color}]}>
            <Text style={Styles.buttonText}>{item.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={[Styles.button, {marginTop: 20}]}>
        <Icon name="chevron-down-outline" size={20} color="white" />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default SharePage;
