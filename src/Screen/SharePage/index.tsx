import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import {SafeAreaView, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {getShareDates} from '../../Helpers/Api';
import Styles from './styles';

const SharePage = ({navigation}) => {
  const [data, setData] = useState<any>([]);

  useEffect(() => {
    setData(getShareDates());
  }, []);

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
