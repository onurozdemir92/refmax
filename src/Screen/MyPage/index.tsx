import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import PlatformSpecificStatusBar from '../../Components/StatusBar';
import styles from './styles';

const MyPage = () => {
  return (
    <View style={styles.container}>
      <PlatformSpecificStatusBar />
      <View style={styles.header1}>
        <View style={styles.headerTitleContainer}>
          <Text style={styles.headerTitleText}>Profile</Text>
        </View>
        <TouchableOpacity>
          <View style={styles.profileImage}>
            <Text>Image</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.header}>
        <TouchableOpacity>
          <View style={styles.iconContainer}>
            <Icon name="settings" size={23} color="black" />
            <Text style={styles.text}>Settings</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.header}>
        <TouchableOpacity>
          <View style={styles.iconContainer}>
            <Icon name="settings" size={23} color="black" />
            <Text style={styles.text}>Languages</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.header}>
        <TouchableOpacity>
          <View style={styles.iconContainer}>
            <Icon name="settings" size={23} color="black" />
            <Text style={styles.text}>Something</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MyPage;
