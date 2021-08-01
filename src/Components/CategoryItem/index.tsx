import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {ICategory} from '../../Helpers/Interfaces';
import styles from './Styles';

interface ICategoryItem {
  data: ICategory;
}

const CategoryItem = ({data}: ICategoryItem) => {
  return (
    <TouchableOpacity activeOpacity={0.7} style={styles.container}>
      <Text style={styles.categoryText}>{data.text}</Text>
    </TouchableOpacity>
  );
};

export default CategoryItem;
