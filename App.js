/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import React from 'react';
import type {Node} from 'react';

import {NavigationContainer, DarkTheme} from '@react-navigation/native';
import Tabs from './navigation/Tabs';

const App: () => Node = () => {
  return (
    <NavigationContainer theme={DarkTheme}>
      <Tabs />
    </NavigationContainer>
  );
};

export default App;
