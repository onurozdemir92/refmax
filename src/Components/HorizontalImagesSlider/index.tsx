import React from 'react';
import {View, Text, ScrollView, Image} from 'react-native';
import IconI from 'react-native-vector-icons/Ionicons';
import Styles from './styles';

const HorizontalImagesSlider = () => {
  return (
    <View style={Styles.container}>
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}>
        <View style={Styles.scrollContainer}>
          <Image
            resizeMode="contain"
            source={{
              uri:
                'https://productimages.hepsiburada.net/s/65/550/110000006877464.jpg/format:webp',
            }}
            style={Styles.image}
          />
        </View>

        <View style={Styles.scrollContainer}>
          <Image
            resizeMode="contain"
            source={{
              uri:
                'https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            }}
            style={Styles.image}
          />
        </View>
      </ScrollView>
      <View style={Styles.imageCountContainer}>
        <IconI name="camera" size={20} color="white" />
        <Text style={Styles.imageCountText}>1/4</Text>
      </View>
    </View>
  );
};

export default HorizontalImagesSlider;
