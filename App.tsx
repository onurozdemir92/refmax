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

import RefPageScreen from './src/Screen/RefPage';
import Home from './src/Screen/Home';
import ProfileSettings from './src/Screen/ProfileSettings';
import AppSettings from './src/Screen/AppSettings';

const Stack = createStackNavigator();
const App: () => Node = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="RefPage" component={RefPageScreen} />
        <Stack.Screen name="Share" component={ShareScreen} />
        <Stack.Screen name="ProfileSettings" component={ProfileSettings} />
        <Stack.Screen name="ImagePage" component={ImagePageScreen} />
        <Stack.Screen name="AppSettings" component={AppSettings} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
