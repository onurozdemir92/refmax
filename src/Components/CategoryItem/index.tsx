import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {ICategory} from '../../Helpers/Interfaces';
import Styles from './Styles';

interface ICategoryItem {
  data: ICategory;
}

const CategoryItem = ({data}: ICategoryItem) => {
  return (
    <TouchableOpacity
      style={[
        Styles.container,
        {backgroundColor: data.backgroundColor || null},
      ]}>
      <Text style={[{color: data.textColor}, Styles.categoryText]}>
        {data.text}
      </Text>
    </TouchableOpacity>
  );
};

export default CategoryItem;
