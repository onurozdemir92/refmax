import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import IconMI from 'react-native-vector-icons/MaterialIcons';
import Colors from '../../Screen/Theme/Colors';
import Styles from './styles';

const TabCustomerComponent = props => {
  return (
    <View style={Styles.container}>
      <TouchableOpacity
        activeOpacity={0.6}
        style={Styles.tabBarButton}
        onPress={() => props.navigation.navigate('FirstPage')}>
        <Icon
          name={'home'}
          color={props.state.index === 0 ? Colors.ChatColor : '#C0BEBE'}
          size={25}
        />
        <Text
          style={{
            color: props.state.index === 0 ? Colors.ChatColor : '#626262',
            fontSize: 10,
          }}>
          Anasayfa
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.6}
        style={Styles.tabBarButton}
        onPress={() => props.navigation.navigate('FavoritePage')}>
        <IconMI
          name="favorite"
          color={props.state.index === 1 ? Colors.ChatColor : '#C0BEBE'}
          size={25}
        />
        <Text
          style={{
            color: props.state.index === 1 ? Colors.ChatColor : '#626262',
            fontSize: 10,
          }}>
          begenilenler
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.6}
        style={Styles.tabBarButton}
        onPress={() => props.navigation.navigate('Share')}>
        <Icon name={'ios-add-circle'} color="#626262" size={40} />
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.6}
        style={Styles.tabBarButton}
        onPress={() => props.navigation.navigate('ChatPage')}>
        <Icon
          name={'paper-plane'}
          color={props.state.index === 2 ? Colors.ChatColor : '#C0BEBE'}
          size={25}
        />
        <Text
          style={{
            color: props.state.index === 2 ? Colors.ChatColor : '#626262',
            fontSize: 10,
          }}>
          konuşma
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.6}
        style={Styles.tabBarButton}
        onPress={() => props.navigation.navigate('MyPage')}>
        <Icon
          name={'person'}
          color={props.state.index === 3 ? Colors.ChatColor : '#C0BEBE'}
          size={25}
        />
        <Text
          style={{
            color: props.state.index === 3 ? Colors.ChatColor : '#626262',
            fontSize: 10,
          }}>
          sayfam
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default TabCustomerComponent;
