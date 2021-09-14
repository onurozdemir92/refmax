import React, { useEffect } from 'react';
import {
  SafeAreaView,
  FlatList,
  StatusBar,
  View,
  Text,
  ScrollView,
  Linking,
} from 'react-native';
import CategoryItem from '../../Components/CategoryItem';
import FirstPageHeader from '../../Components/FirstPageHeader';
import FirstSliderContainer from '../../Components/FirstSliderContainer';
import Header from '../../Components/Header';
import RefmaxItem from '../../Components/RefmaxItem/intex';
import ReklamComponent from '../../Components/ReklamComponent';
import SearchHeader from '../../Components/SearchHeader';
import { ICategory, IRef } from '../../Helpers/Interfaces';
import { categorys, refData } from '../../Helpers/TestData';
import changeNavigationBarColor from 'react-native-navigation-bar-color';
import { BannerAd, BannerAdSize, TestIds } from '@react-native-firebase/admob';

import auth from '@react-native-firebase/auth';
import Styles from './styles';

const FirstPage = ({ navigation }) => {


  const satusBar = async () => {
    await changeNavigationBarColor('white', true, false);

  }

  useEffect(() => {
    satusBar();


  }, []);


  return (
    <SafeAreaView style={Styles.container}>
      <StatusBar backgroundColor='white' barStyle='dark-content' />
      {/* <Header /> */}
      {/* <SearchHeader /> */}
      <FirstPageHeader navigation={navigation} />
      {/* <BannerAd
        unitId={TestIds.BANNER}
        size={BannerAdSize.ADAPTIVE_BANNER}

        requestOptions={{
          requestNonPersonalizedAdsOnly: true,
        }} /> */}
      {/* <View style={Styles.CategoryContainer}>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          style={Styles.sliderScroll}
          horizontal={true}>
          {categorys.map((item: ICategory, index: number) => (
            // <CategoryItem key={index} data={item} />
            <FirstSliderContainer key={index} />
          ))}
        </ScrollView>
      </View> */}
      <FlatList
        data={refData}
        style={Styles.flatlist}
        numColumns={2}
        renderItem={({ item, index }) => {
          return (

            <RefmaxItem
              onRefPress={(e: IRef) => navigation.push('ProductPage', { Ref: e, productId: 20 })}
              refmax={item}
            />


          );
        }}
      />
    </SafeAreaView>
  );
};

export default FirstPage;
