import React from 'react';
import {
  SafeAreaView,
  FlatList,
  StatusBar,
  View,
  Text,
  ScrollView,
} from 'react-native';
import CategoryItem from '../../Components/CategoryItem';
import Header from '../../Components/Header';
import RefmaxItem from '../../Components/RefmaxItem/intex';
import {ICategory, IRef} from '../../Helpers/Interfaces';
import Styles from './styles';

const FirstPage = ({navigation}) => {
  const categorys: ICategory[] = [
    {
      id: '1',
      text: 'daire',
      icon: <Text>icon</Text>,
      backgroundColor: '#19EAA2',
      textColor: 'white',
    },
    {
      id: '2',
      text: 'rezidans',
      icon: <Text>icon</Text>,
      backgroundColor: '#19D4EA',
      textColor: 'white',
    },
    {
      id: '3',
      text: 'Elektronik',
      icon: <Text>icon</Text>,
      backgroundColor: '#176CEE',
      textColor: 'white',
    },
    {
      id: '4',
      text: 'Ücretsiz',
      icon: <Text>icon</Text>,
      backgroundColor: '#7B0FEE',
      textColor: 'white',
    },
  ];
  const data: IRef[] = [
    {
      id: '1',
      country: 'Türkiye',
      description: 'dlaksdk kdlasdlşasklş lsldkalskd lksaldkla klaskdlaskd',
      district: 'gerze',
      favorite: true,
      title: 'Apple 6s Plus',
      images: [
        'https://images.pexels.com/photos/2478248/pexels-photo-2478248.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        'https://productimages.hepsiburada.net/s/7/550/9749718859826.jpg/format:webp',
      ],
      price: '10000',
      userId: '1',
      state: 'Sinop',
    },
    {
      id: '2',
      country: 'Türkiye',
      description: 'dlaksdk kdlasdlşasklş lsldkalskd lksaldkla klaskdlaskd',
      district: 'gerze',
      favorite: false,
      title: 'Apple 6s Plus',
      images: [
        'https://images.pexels.com/photos/1072179/pexels-photo-1072179.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        'https://productimages.hepsiburada.net/s/7/550/9749718859826.jpg/format:webp',
      ],
      price: '10000',
      userId: '1',
      state: 'Sinop',
    },
    {
      id: '3',
      country: 'Türkiye',
      description: 'dlaksdk kdlasdlşasklş lsldkalskd lksaldkla klaskdlaskd',
      district: 'gerze',
      favorite: true,
      title: 'Apple 6s Plus',
      images: [
        'https://images.pexels.com/photos/2478248/pexels-photo-2478248.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        'https://images.pexels.com/photos/2150/sky-space-dark-galaxy.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      ],
      price: '10000',
      userId: '1',
      state: 'Sinop',
    },
    {
      id: '4',
      country: 'Türkiye',
      description: 'dlaksdk kdlasdlşasklş lsldkalskd lksaldkla klaskdlaskd',
      district: 'gerze',
      favorite: true,
      title: 'Apple 6s Plus',
      images: [
        'https://productimages.hepsiburada.net/s/62/320/110000004108548.jpg',
        'https://productimages.hepsiburada.net/s/7/550/9749718859826.jpg/format:webp',
      ],
      price: '10000',
      userId: '1',
      state: 'Sinop',
    },
    {
      id: '5',
      country: 'Türkiye',
      description: 'dlaksdk kdlasdlşasklş lsldkalskd lksaldkla klaskdlaskd',
      district: 'gerze',
      favorite: true,
      title: 'Apple 6s Plus',
      images: [
        'https://productimages.hepsiburada.net/s/6/320/9713620058162.jpg',
        'https://productimages.hepsiburada.net/s/7/550/9749718859826.jpg/format:webp',
      ],
      price: '10000',
      userId: '1',
      state: 'Sinop',
    },
    {
      id: '6',
      country: 'Türkiye',
      description: 'dlaksdk kdlasdlşasklş lsldkalskd lksaldkla klaskdlaskd',
      district: 'gerze',
      favorite: true,
      title: 'Apple 6s Plus',
      images: [
        'https://productimages.hepsiburada.net/s/57/320/11305732341810.jpg',
        'https://productimages.hepsiburada.net/s/7/550/9749718859826.jpg/format:webp',
      ],
      price: '10000',
      userId: '1',
      state: 'Sinop',
    },
    {
      id: '7',
      country: 'Türkiye',
      description: 'dlaksdk kdlasdlşasklş lsldkalskd lksaldkla klaskdlaskd',
      district: 'gerze',
      favorite: true,
      title: 'Apple 6s Plus',
      images: [
        'https://productimages.hepsiburada.net/s/48/320/10956611485746.jpg',
        'https://productimages.hepsiburada.net/s/7/550/9749718859826.jpg/format:webp',
      ],
      price: '10000',
      userId: '1',
      state: 'Sinop',
    },
    {
      id: '8',
      country: 'Türkiye',
      description: 'dlaksdk kdlasdlşasklş lsldkalskd lksaldkla klaskdlaskd',
      district: 'gerze',
      favorite: true,
      title: 'Apple 6s Plus',
      images: [
        'https://productimages.hepsiburada.net/l/18/320/9784615141426.jpg',
        'https://productimages.hepsiburada.net/s/7/550/9749718859826.jpg/format:webp',
      ],
      price: '10000',
      userId: '1',
      state: 'Sinop',
      premium: true,
    },
    {
      id: '9',
      country: 'Türkiye',
      description: 'dlaksdk kdlasdlşasklş lsldkalskd lksaldkla klaskdlaskd',
      district: 'gerze',
      favorite: true,
      title: 'Apple 6s Plus',
      images: [
        'https://productimages.hepsiburada.net/s/36/320/10531347693618.jpg',
        'https://productimages.hepsiburada.net/s/7/550/9749718859826.jpg/format:webp',
      ],
      price: '10000',
      userId: '1',
      state: 'Sinop',
    },
    {
      id: '10',
      country: 'Türkiye',
      description: 'dlaksdk kdlasdlşasklş lsldkalskd lksaldkla klaskdlaskd',
      district: 'gerze',
      favorite: true,
      title: 'Apple 6s Plus',
      images: [
        'https://productimages.hepsiburada.net/s/7/320/9749718827058.jpg',
        'https://productimages.hepsiburada.net/s/7/550/9749718859826.jpg/format:webp',
      ],
      price: '10000',
      userId: '1',
      state: 'Sinop',
    },
    {
      id: '11',
      country: 'Türkiye',
      description: 'dlaksdk kdlasdlşasklş lsldkalskd lksaldkla klaskdlaskd',
      district: 'gerze',
      favorite: true,
      title: 'Apple 6s Plus',
      images: [
        'https://productimages.hepsiburada.net/s/36/320/10510584676402.jpg',
        'https://productimages.hepsiburada.net/s/7/550/9749718859826.jpg/format:webp',
      ],
      price: '10000',
      userId: '1',
      state: 'Sinop',
      premium: true,
    },
  ];
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      {/* <Header /> */}
      <View style={Styles.CategoryContainer}>
        <ScrollView style={{paddingVertical:5}} horizontal={true}>
          {categorys.map((item: ICategory) => (
            <CategoryItem data={item} />
          ))}
        </ScrollView>
      </View>
      <FlatList
        data={data}
        numColumns={2}
        renderItem={({item, index}) => {
          return (
            <RefmaxItem
              onRefPress={(e: IRef) => navigation.push('RefPage', {Ref: e})}
              refmax={item}
            />
          );
        }}
      />
    </SafeAreaView>
  );
};

export default FirstPage;
