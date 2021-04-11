import React from 'react';
import {View, Text, TouchableOpacity, ImageBackground} from 'react-native';
import {ICategory} from '../../Helpers/Interfaces';
import Styles from './Styles';

interface ICategoryItem {
  data: ICategory;
}

const CategoryItem = ({data}: ICategoryItem) => {
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      style={[
        Styles.container,
        {backgroundColor: data.backgroundColor || null},
      ]}>
      <ImageBackground
        resizeMode="cover"
        blurRadius={0.5}
        style={Styles.backgrounImage}
        source={{
          uri: data.image,
        }}>
        <Text style={[{color: data.textColor}, Styles.categoryText]}>
          {data.text}
        </Text>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default CategoryItem;
