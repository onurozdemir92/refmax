import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import PlatformSpecificStatusBar from '../../Components/StatusBar';
import styles from './styles';
import MCIIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const MyPage = () => {
  return (
    <View style={styles.container}>
      <PlatformSpecificStatusBar />
      <View style={styles.headerContainer}>
        <TouchableOpacity>
          <View style={styles.header}>
            <View style={styles.profileImage}>
              <Text>Image</Text>
            </View>
            <View>
              <Text>Umur Samaz</Text>
            </View>
            <View>
              <MCIIcon name="arrow-right" size={23} color="black" />
            </View>
          </View>
        </TouchableOpacity>
        <View style={styles.headerTitleContainer}>
          <TouchableOpacity>
            <View>
              <Icon name="settings" size={23} color="black" />
            </View>
          </TouchableOpacity>
        </View>
      </View>
      {/* <View style={styles.header}>
        <TouchableOpacity>
          <View style={styles.iconContainer}>
            <Icon name="settings" size={23} color="black" />
            <Text style={styles.text}>Settings</Text>
          </View>
        </TouchableOpacity>
      </View> */}
    </View>
  );
};

export default MyPage;
