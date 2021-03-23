import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import FirstPage from '../FirstPage';
import FavoritePage from '../FavoritePage';
import SharePage from '../SharePage';
import ChatPage from '../ChatPage';
import MyPage from '../MyPage';

const Tab = createBottomTabNavigator();
const Home = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        options={{
          title: 'AnaSayfa',
          tabBarIcon: e => <Icon name={'home'} color={e.color} size={20} />,
        }}
        name="FirstPage"
        component={FirstPage}
      />
      <Tab.Screen
        options={{title: 'Beğenilenler'}}
        name="FavoritePage"
        component={FavoritePage}
      />
      <Tab.Screen
        options={{title: 'Paylaş'}}
        name="SharePage"
        component={SharePage}
      />
      <Tab.Screen
        options={{title: 'Konuşmalar'}}
        name="ChatPage"
        component={ChatPage}
      />
      <Tab.Screen
        options={{title: 'Sayfam'}}
        name="MyPage"
        component={MyPage}
      />
    </Tab.Navigator>
  );
};

export default Home;
