import * as React from 'react';
import {Text, View} from 'react-native';
//import Icon from 'react-native-vector-icons/Ionicons';
import PlatformSpecificStatusBar from '../../Components/StatusBar';
import styles from './styles';
//import MCIIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Header from '../../Components/Header';

const MyPage = () => {
  return (
    <View style={styles.container}>
      <PlatformSpecificStatusBar />
      <Header title="Settings" />
      <View style={styles.personalInfo}>
        <Text>Settings</Text>
      </View>
    </View>
  );
};

export default MyPage;
