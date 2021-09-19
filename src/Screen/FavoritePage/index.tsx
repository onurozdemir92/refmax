import React, { useEffect, useState } from 'react';
import { FlatList, SafeAreaView, Text, View, Dimensions } from 'react-native';
import RefmaxHorizontalItem from '../../Components/RefmaxHorizontalItem';
import { IRef } from '../../Helpers/Interfaces';
import auth from '@react-native-firebase/auth';

import Styles from './styles';
import SingInComponent from '../../Components/SingInComponent';
const { width, height } = Dimensions.get('window')
const FavoritePage = ({ navigation }) => {
  const [accountState, setAccountState] = useState<boolean>();

  const accountControl = () => {

    auth().onAuthStateChanged((user) => {
      if (user) {
        setAccountState(true)
      }
      else {
        setAccountState(false)
      }
    })

  }

  useEffect(() => {
    accountControl()

  }, [])


  const data: IRef[] = [
    {
      id: '1',
      country: 'Türkiye',
      description: 'dlaksdk kdlasdlşasklş lsldkalskd lksaldkla klaskdlaskd',
      district: 'gerze',
      favorite: true,
      title: 'Kiralık Ev balkonlu ii katlı ne arasan o da buda şuda',
      images: [
        'https://images.pexels.com/photos/2246476/pexels-photo-2246476.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        'https://productimages.hepsiburada.net/s/7/550/9749718859826.jpg/format:webp',
        'https://productimages.hepsiburada.net/s/7/550/9749718859826.jpg/format:webp',
        'https://productimages.hepsiburada.net/s/7/550/9749718859826.jpg/format:webp',
        'https://productimages.hepsiburada.net/s/7/550/9749718859826.jpg/format:webp',
        'https://productimages.hepsiburada.net/s/7/550/9749718859826.jpg/format:webp',
        'https://productimages.hepsiburada.net/s/7/550/9749718859826.jpg/format:webp',
        'https://productimages.hepsiburada.net/s/7/550/9749718859826.jpg/format:webp',
        'https://productimages.hepsiburada.net/s/7/550/9749718859826.jpg/format:webp',
        'https://productimages.hepsiburada.net/s/7/550/9749718859826.jpg/format:webp',
        'https://productimages.hepsiburada.net/s/7/550/9749718859826.jpg/format:webp',
        'https://productimages.hepsiburada.net/s/7/550/9749718859826.jpg/format:webp',
      ],
      price: '10000',
      userId: '1',
      state: 'Sinop',
      status: 1,
      date: new Date(),
    },
    {
      id: '2',
      country: 'Türkiye',
      description: 'dlaksdk kdlasdlşasklş lsldkalskd lksaldkla klaskdlaskd',
      district: 'gerze',
      favorite: false,
      title: 'Kiralık Ev balkonlu ii katlı ne arasan o da buda şuda',
      images: [
        'https://images.pexels.com/photos/1072179/pexels-photo-1072179.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        'https://productimages.hepsiburada.net/s/7/550/9749718859826.jpg/format:webp',
      ],
      price: '10000',
      userId: '1',
      status: 1,
      date: new Date(),
      state: 'Sinop',
    },
    {
      id: '3',
      country: 'Türkiye',
      description: 'dlaksdk kdlasdlşasklş lsldkalskd lksaldkla klaskdlaskd',
      district: 'gerze',
      favorite: true,
      title: 'Kiralık Ev balkonlu ii katlı ne arasan o da buda şuda',
      images: [
        'https://images.pexels.com/photos/2478248/pexels-photo-2478248.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        'https://images.pexels.com/photos/2150/sky-space-dark-galaxy.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      ],
      price: '10000',
      userId: '1',
      status: 2,
      state: 'Sinop',
      date: new Date(),
      premium: true,
    },
    {
      id: '4',
      country: 'Türkiye',
      description: 'dlaksdk kdlasdlşasklş lsldkalskd lksaldkla klaskdlaskd',
      district: 'gerze',
      favorite: true,
      title: 'Kiralık Ev balkonlu ii katlı ne arasan o da buda şuda',
      images: [
        'https://productimages.hepsiburada.net/s/62/320/110000004108548.jpg',
        'https://productimages.hepsiburada.net/s/7/550/9749718859826.jpg/format:webp',
      ],
      price: '10000',
      userId: '1',
      status: 2,
      state: 'Sinop',
      date: new Date(),
    },
    {
      id: '5',
      country: 'Türkiye',
      description: 'dlaksdk kdlasdlşasklş lsldkalskd lksaldkla klaskdlaskd',
      district: 'gerze',
      favorite: true,
      title: 'Kiralık Ev balkonlu ii katlı ne arasan o da buda şuda',
      images: [
        'https://productimages.hepsiburada.net/s/6/320/9713620058162.jpg',
        'https://productimages.hepsiburada.net/s/7/550/9749718859826.jpg/format:webp',
      ],
      price: '10000',
      userId: '1',
      status: 2,
      state: 'Sinop',
      date: new Date(),
    },
    {
      id: '6',
      country: 'Türkiye',
      description: 'dlaksdk kdlasdlşasklş lsldkalskd lksaldkla klaskdlaskd',
      district: 'gerze',
      favorite: true,
      status: 2,
      title: 'Kiralık Ev balkonlu ii katlı ne arasan o da buda şuda',
      images: [
        'https://productimages.hepsiburada.net/s/57/320/11305732341810.jpg',
        'https://productimages.hepsiburada.net/s/7/550/9749718859826.jpg/format:webp',
      ],
      price: '10000',
      userId: '1',
      state: 'Sinop',
      date: new Date(),
    },
    {
      id: '7',
      country: 'Türkiye',
      description: 'dlaksdk kdlasdlşasklş lsldkalskd lksaldkla klaskdlaskd',
      district: 'gerze',
      favorite: true,
      title: 'Kiralık Ev balkonlu ii katlı ne arasan o da buda şuda',
      images: [
        'https://productimages.hepsiburada.net/s/48/320/10956611485746.jpg',
        'https://productimages.hepsiburada.net/s/7/550/9749718859826.jpg/format:webp',
      ],
      price: '10000',
      status: 2,
      userId: '1',
      state: 'Sinop',
      date: new Date(),
    },
    {
      id: '8',
      country: 'Türkiye',
      description: 'dlaksdk kdlasdlşasklş lsldkalskd lksaldkla klaskdlaskd',
      district: 'gerze',
      favorite: true,
      title: 'Kiralık Ev balkonlu ii katlı ne arasan o da buda şuda',
      images: [
        'https://productimages.hepsiburada.net/l/18/320/9784615141426.jpg',
        'https://productimages.hepsiburada.net/s/7/550/9749718859826.jpg/format:webp',
      ],
      price: '10000',
      userId: '1',
      state: 'Sinop',
      premium: true,
      status: 2,
      date: new Date(),
    },
    {
      id: '9',
      country: 'Türkiye',
      description: 'dlaksdk kdlasdlşasklş lsldkalskd lksaldkla klaskdlaskd',
      district: 'gerze',
      favorite: true,
      title: 'Kiralık Ev balkonlu ii katlı ne arasan o da buda şuda',
      images: [
        'https://productimages.hepsiburada.net/s/36/320/10531347693618.jpg',
        'https://productimages.hepsiburada.net/s/7/550/9749718859826.jpg/format:webp',
      ],
      price: '10000',
      userId: '1',
      status: 2,
      state: 'Sinop',
      date: new Date(),
    },
    {
      id: '10',
      country: 'Türkiye',
      description: 'dlaksdk kdlasdlşasklş lsldkalskd lksaldkla klaskdlaskd',
      district: 'gerze',
      favorite: true,
      title: 'Kiralık Ev balkonlu ii katlı ne arasan o da buda şuda',
      images: [
        'https://productimages.hepsiburada.net/s/7/320/9749718827058.jpg',
        'https://productimages.hepsiburada.net/s/7/550/9749718859826.jpg/format:webp',
      ],
      price: '10000',
      userId: '1',
      status: 2,
      state: 'Sinop',
      date: new Date(),
    },
    {
      id: '11',
      country: 'Türkiye',
      description: 'dlaksdk kdlasdlşasklş lsldkalskd lksaldkla klaskdlaskd',
      district: 'gerze',
      favorite: true,
      title: 'Kiralık Ev balkonlu ii katlı ne arasan o da buda şuda',
      images: [
        'https://productimages.hepsiburada.net/s/36/320/10510584676402.jpg',
        'https://productimages.hepsiburada.net/s/7/550/9749718859826.jpg/format:webp',
      ],
      price: '10000',
      userId: '1',
      status: 2,
      state: 'Sinop',
      date: new Date(),
    },
  ];

  if (accountState) {
    return (
      <SafeAreaView style={Styles.container}>
        <View style={Styles.headerContainer}>
          <Text style={Styles.headerTitle}>Beğenilenler</Text>
        </View>
        <FlatList
          data={data}
          renderItem={item => {
            return (
              <>
                <RefmaxHorizontalItem
                  navigation={navigation}
                  key={item.item.id}
                  refmax={item.item}
                />
              </>
            );
          }}
        />
      </SafeAreaView>
    );
  } else {
    return (<SingInComponent to='Go' navigation={navigation} />)
  }
};

export default FavoritePage;
