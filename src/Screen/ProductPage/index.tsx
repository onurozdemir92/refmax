import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Image
} from 'react-native';
import IconI from 'react-native-vector-icons/Ionicons';
import IconMI from 'react-native-vector-icons/MaterialIcons';

import HorizontalImagesSlider from '../../Components/HorizontalImagesSlider';
import ProductPageHeader from '../../Components/ProductPageHeader';
import ProductSeenInfo from '../../Components/ProductSeenInfo';
import { getProductInfo } from '../../Helpers/Api/Product';
import { getUserInfo } from '../../Helpers/Api/User';
import Styles from './styles';

const ProductPage = ({ navigation, route }) => {

  const [product, setProduct] = useState();
  const [user, setUser] = useState();
  const productId = route?.params?.productId


  const getProduct = async () => {
    const resProduct = await getProductInfo(productId)
    if (resProduct) {
      setProduct(resProduct);
      const user = await getUserInfo(resProduct.userId);
      setUser(user)
      console.log('producttt ', user)
    } else {
      return null
    }
  }

  useEffect(() => {
    if (productId) {
      getProduct()
    }

  }, [])


  return (
    <SafeAreaView style={Styles.container}>
      <ProductPageHeader navigation={navigation} />
      <ScrollView style={Styles.scrollView}>
        <HorizontalImagesSlider />
        <ProductSeenInfo />
        <View style={Styles.priceContainer}>
          <Text style={Styles.priceText}>{product?.productPrice} ₺</Text>
        </View>
        <View style={Styles.titleContainer}>
          <Text style={Styles.titleText}>{product?.productTitle}</Text>
        </View>
        <View style={Styles.buttonsContainer}>
          <TouchableOpacity style={[Styles.button, Styles.backgroundButton]}>
            <Text style={[Styles.buttonText, { color: 'white' }]}>
              Daha hızlı sat
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={Styles.button}>
            <Text style={[Styles.buttonText]}>Yayindan kaldır</Text>
          </TouchableOpacity>
          <TouchableOpacity style={Styles.button}>
            <Text style={[Styles.buttonText]}>Sosyal ağlarda paylaş</Text>
          </TouchableOpacity>
        </View>
        <View style={Styles.locationContainer}>
          <TouchableOpacity style={Styles.locationButton}>
            <View style={Styles.locationIconText}>
              <IconI name="location" size={25} color="#C8D2F5" />
              <Text>Ankara/Kızılay</Text>
            </View>
            <IconMI name="keyboard-arrow-right" size={25} color="#C8D2F5" />
          </TouchableOpacity>
        </View>
        <View style={Styles.pointerContainer}>
          <View style={Styles.pointer} />
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('Profile', { userId: user?.userId })} style={Styles.userInfoContainer}>
          <Image source={{ uri: 'https://images.unsplash.com/photo-1618641986557-1ecd230959aa?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80' }} style={Styles.userAvatar} />
          <View style={Styles.userInfoTextContainer}>
            <View style={Styles.userNameContainer}><Text style={Styles.userName}>Onur Rahmi Özdemir</Text></View>

          </View>

        </TouchableOpacity>
        <View style={Styles.pointerContainer}>
          <View style={Styles.pointer} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProductPage;
