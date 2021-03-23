import React from 'react';
import {SafeAreaView, FlatList, StatusBar} from 'react-native';
import Header from '../../Components/Header';
import RefmaxItem from '../../Components/RefmaxItem/intex';
import {IRef} from '../../Helpers/Interfaces';

const FirstPage = ({navigation}) => {
  const data: IRef[] = [
    {
      id: '1',
      country: 'Türkiye',
      description: 'dlaksdk kdlasdlşasklş lsldkalskd lksaldkla klaskdlaskd',
      district: 'gerze',
      favorite: true,
      title: 'Apple 6s Plus',
      images: [
        'https://images.pexels.com/photos/2246476/pexels-photo-2246476.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
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
    },
  ];
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <Header />
      <FlatList
        data={data}
        numColumns={2}
        renderItem={({item, index}) => {
          return (
            <RefmaxItem
              onRefPress={(e: IRef) => navigation.navigate('RefPage', {Ref: e})}
              refmax={item}
            />
          );
        }}
      />
    </SafeAreaView>
  );
};

export default FirstPage;
