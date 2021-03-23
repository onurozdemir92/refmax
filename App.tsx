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
import RefPageScreen from './src/Screen/RefPage';
import Home from './src/Screen/Home';

const Stack = createStackNavigator();
const App: () => Node = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="RefPage" component={RefPageScreen} />
        <Stack.Screen name="SplashScreen" component={SplashScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
