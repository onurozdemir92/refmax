import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { SafeAreaView, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { getShareDates } from '../../Helpers/Api';
import { getCatagories } from '../../Helpers/Api/Categories';
import Styles from './styles';

const SharePage = ({ navigation }) => {
  const [data, setData] = useState<any>([]);

  const getCategoryData = async () => {
    const categories = await getCatagories();
    setData(categories)
    console.log('categories ', categories)
  }

  useEffect(() => {
    getCategoryData();
  }, []);

  return (
    <SafeAreaView style={Styles.container}>
      <View style={Styles.categoryContainer}>
        {data.map(item => (
          <TouchableOpacity
            key={item.Id}
            onPress={() => navigation.goBack()}
            style={[Styles.button, { backgroundColor: item.color }]}>
            <Text style={Styles.buttonText}>{item.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={[Styles.button, { marginTop: 20 }]}>
        <Icon name="chevron-down-outline" size={20} color="white" />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default SharePage;
