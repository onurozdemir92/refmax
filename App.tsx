/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import SplashScreen from './src/Screen/SplashScreen';
import ShareScreen from './src/Screen/SharePage';
import ImagePageScreen from './src/Screen/ImagePage';

import ProductPageScreen from './src/Screen/ProductPage';
import Home from './src/Screen/Home';
import ProfileSettings from './src/Screen/ProfileSettings';
import AppSettings from './src/Screen/AppSettings';
import MyPage from './src/Screen/MyPage';

const Stack = createStackNavigator();
const App: () => Node = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen
          name="SplashScreen"
          options={{animationEnabled: true}}
          component={SplashScreen}
        />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="ProductPage" component={ProductPageScreen} />
        <Stack.Screen name="Share" component={ShareScreen} />
        <Stack.Screen name="ProfileSettings" component={ProfileSettings} />
        <Stack.Screen name="ImagePage" component={ImagePageScreen} />
        <Stack.Screen name="AppSettings" component={AppSettings} />
        <Stack.Screen name="MyPage" component={MyPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
