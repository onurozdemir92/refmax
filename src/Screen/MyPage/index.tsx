import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import PlatformSpecificStatusBar from '../../Components/StatusBar';
import styles from './styles';
import MCIIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const MyPage = ({navigation}) => {
  return (
    <View style={styles.container}>
      <PlatformSpecificStatusBar />
      <View style={styles.headerContainer}>
        <TouchableOpacity
          style={styles.leftIcon}
          onPress={() => {
            navigation.navigate('ProfileSettings');
          }}>
          <View style={styles.profileImage}>
            <Text>Image</Text>
          </View>
          <View>
            <Text style={styles.name}>Umur Samaz</Text>
          </View>
          <View>
            <MCIIcon name="arrow-right" size={23} color="black" />
          </View>
        </TouchableOpacity>
        <View style={styles.empty} />
        <TouchableOpacity style={styles.ringIcon}>
          <MCIIcon name="bell-ring" size={23} color="black" />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.settingsIcon}
          onPress={() => {
            navigation.navigate('AppSettings');
          }}>
          <Icon name="settings" size={28} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MyPage;
