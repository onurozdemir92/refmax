import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import IconMI from 'react-native-vector-icons/MaterialIcons';

import FirstPage from '../FirstPage';
import FavoritePage from '../FavoritePage';
import ChatPage from '../ChatPage';
import MyPage from '../MyPage';
import {View} from 'react-native';
import TabCustomerComponent from '../../Components/TabCustomerComponent';

const Tab = createBottomTabNavigator();
const Home = () => {
  return (
    <Tab.Navigator tabBar={props => <TabCustomerComponent {...props} />}>
      <Tab.Screen
        options={{
          title: 'AnaSayfa',
          tabBarIcon: e => <Icon name={'home'} color={e.color} size={25} />,
        }}
        name="FirstPage"
        component={FirstPage}
      />
      <Tab.Screen
        options={{
          title: 'Beğenilenler',
          tabBarIcon: e => <IconMI name="favorite" size={25} color={e.color} />,
        }}
        name="FavoritePage"
        component={FavoritePage}
      />
      <Tab.Screen
        options={{
          title: 'Konuşmalar',
          tabBarIcon: e => (
            <Icon name={'paper-plane'} color={e.color} size={25} />
          ),
        }}
        name="ChatPage"
        component={ChatPage}
      />
      <Tab.Screen
        options={{
          title: 'Sayfam',
          tabBarIcon: e => <Icon name={'person'} color={e.color} size={25} />,
        }}
        name="MyPage"
        component={MyPage}
      />
    </Tab.Navigator>
  );
};

export default Home;
