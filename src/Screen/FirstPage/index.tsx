import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  FlatList,
  StatusBar,
  View,
  Text,
  ScrollView,
  Linking,
  Dimensions
} from 'react-native';
import CategoryItem from '../../Components/CategoryItem';
import FirstPageHeader from '../../Components/FirstPageHeader';
import FirstSliderContainer from '../../Components/FirstSliderContainer';
import Header from '../../Components/Header';
import RefmaxItem from '../../Components/RefmaxItem/intex';
import ReklamComponent from '../../Components/ReklamComponent';
import SearchHeader from '../../Components/SearchHeader';
import { ICategory, IProduct, IRef } from '../../Helpers/Interfaces';
import { categorys, refData } from '../../Helpers/TestData';
import changeNavigationBarColor from 'react-native-navigation-bar-color';
import { BannerAd, BannerAdSize, TestIds } from '@react-native-firebase/admob';
import IconMCI from 'react-native-vector-icons/MaterialCommunityIcons'

import auth from '@react-native-firebase/auth';
import Styles from './styles';
import { getAllProducts } from '../../Helpers/Api/Product';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Colors from '../Theme/Colors';
const { width } = Dimensions.get('window')
const FirstPage = ({ navigation }) => {

  const [producsState, setProductsState] = useState<IProduct[]>([])


  const satusBar = async () => {
    await changeNavigationBarColor('white', true, false);

  }
  const getProducts = async () => {
    const products: IProduct[] = await getAllProducts();
    setProductsState(products)


  }

  useEffect(() => {
    getProducts()
  }, [])

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
        ListHeaderComponent={
          <View style={Styles.fullScreenSliderButtonContainer}>
            <TouchableOpacity onPress={() => navigation.navigate('FullScreenSlider', { datas: producsState })} style={Styles.fullScreenSliderButton}>
              <IconMCI name='party-popper' size={20} color={Colors.MainColor} />
              <Text style={Styles.fullScreenSliderButtonText}>Yeni Özellik</Text>
            </TouchableOpacity>
          </View>
        }
        data={producsState}
        style={Styles.flatlist}
        numColumns={2}
        renderItem={({ item, index }) => {
          return (

            <RefmaxItem
              key={item.productId}
              onRefPress={() => navigation.push('ProductPage', { productId: item.productId })}
              item={item}
            />


          );
        }}
        keyExtractor={(item) => item.productId}
      />
    </SafeAreaView>
  );
};

export default FirstPage;
