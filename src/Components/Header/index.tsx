import * as React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

const Header = (props: any) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.headerTitle}>{props.title}</Text>
      </View>
    </View>
  );
};
export default Header;
