import React from 'react';
import {View, Text, TouchableOpacity, ImageBackground} from 'react-native';
import {ICategory} from '../../Helpers/Interfaces';
import Styles from './Styles';

interface ICategoryItem {
  data: ICategory;
}

const CategoryItem = ({data}: ICategoryItem) => {
  return (
    <TouchableOpacity activeOpacity={0.7} style={[Styles.container]}>
      <Text style={Styles.categoryText}>{data.text}</Text>
    </TouchableOpacity>
  );
};

export default CategoryItem;
