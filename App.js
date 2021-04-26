/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import React, {useReducer, useEffect} from 'react';
import type {Node} from 'react';

import {NavigationContainer, DarkTheme} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const SettingsContext = React.createContext({});

const reducer = (state, action) => {
  switch (action.type) {
    case 'updateContext':
      return action.settings;
  }
};

const initialState = {};

import Tabs from './navigation/Tabs';

const App: () => Node = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    (async () => {
      const savedSettings = await AsyncStorage.getItem('settings');
      dispatch({type: 'updateContext', settings: JSON.parse(savedSettings)});
    })();
  }, []);

  return (
    <SettingsContext.Provider value={{state, dispatch}}>
      <NavigationContainer theme={DarkTheme}>
        <Tabs />
      </NavigationContainer>
    </SettingsContext.Provider>
  );
};

export default App;
