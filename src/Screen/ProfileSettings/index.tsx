import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import PlatformSpecificStatusBar from '../../Components/StatusBar';
import styles from './styles';
import MCIIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Header from '../../Components/Header';

const MyPage = () => {
  return (
    <View style={styles.container}>
      <PlatformSpecificStatusBar />
      <Header />
      <View style={styles.personalInfo}>
        <View style={styles.left}>
          <Text>Name</Text>
          <Text>sth</Text>
          <Text>203 714 476</Text>
          <Text>0.0</Text>
        </View>
        <View style={styles.image}>
          <Text>Image</Text>
        </View>
      </View>
    </View>
  );
};

export default MyPage;
