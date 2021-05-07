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
        style={Styles.tabBarButton}
        onPress={() => props.navigation.navigate('FirstPage')}>
        <Icon
          name={'home'}
          color={props.state.index === 0 ? Colors.ChatColor : 'black'}
          size={25}
        />
        <Text>Anasayfa</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={Styles.tabBarButton}
        onPress={() => props.navigation.navigate('FavoritePage')}>
        <IconMI
          name="favorite"
          color={props.state.index === 1 ? Colors.ChatColor : 'black'}
          size={25}
        />
        <Text>begenilenler</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={Styles.tabBarButton}
        onPress={() => props.navigation.navigate('Share')}>
        <Icon name={'ios-add-circle'} size={25} />
        <Text>paylas</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={Styles.tabBarButton}
        onPress={() => props.navigation.navigate('ChatPage')}>
        <Icon
          name={'paper-plane'}
          color={props.state.index === 2 ? Colors.ChatColor : 'black'}
          size={25}
        />
        <Text>konuşma</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={Styles.tabBarButton}
        onPress={() => props.navigation.navigate('MyPage')}>
        <Icon
          name={'person'}
          color={props.state.index === 3 ? Colors.ChatColor : 'black'}
          size={25}
        />
        <Text>sayfam</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TabCustomerComponent;
