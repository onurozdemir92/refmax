import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import IconI from 'react-native-vector-icons/Ionicons';
import IconMI from 'react-native-vector-icons/MaterialIcons';

import HorizontalImagesSlider from '../../Components/HorizontalImagesSlider';
import ProductPageHeader from '../../Components/ProductPageHeader';
import ProductSeenInfo from '../../Components/ProductSeenInfo';
import Styles from './styles';

const ProductPage = ({navigation}) => {
  return (
    <SafeAreaView style={Styles.container}>
      <ProductPageHeader navigation={navigation} />
      <ScrollView style={Styles.scrollView}>
        <HorizontalImagesSlider />
        <ProductSeenInfo />
        <View style={Styles.priceContainer}>
          <Text style={Styles.priceText}>4850 ₺</Text>
        </View>
        <View style={Styles.titleContainer}>
          <Text style={Styles.titleText}>IPhone 11pro 64gb</Text>
        </View>
        <View style={Styles.buttonsContainer}>
          <TouchableOpacity style={[Styles.button, Styles.backgroundButton]}>
            <Text style={[Styles.buttonText, {color: 'white'}]}>
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
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProductPage;
