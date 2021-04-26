import Ionicons from 'react-native-vector-icons/Ionicons';
import Home from '../components/screens/Home';
import Pictures from '../components/screens/Pictures';
import Experimental from '../components/screens/Experimental';
import Settings from '../components/screens/Settings';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React, {createContext} from 'react';

const Tab = createBottomTabNavigator();

const screens = {
  Home: 'Home',
  Other: 'Other',
  Experimental: 'Experimental',
  Settings: 'Settings',
};
export const ScreenContext = createContext(screens);

const Tabs = () => (
  <ScreenContext.Provider value={screens}>
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          const icons = {
            Home: 'home',
            Other: 'image',
            Experimental: 'flask',
            Settings: 'settings',
          };

          const name = `${icons[route.name]}${focused ? '' : '-outline'}`;

          return <Ionicons name={name} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        style: {
          backgroundColor: '#152025',
        },
        inactiveTintColor: '#424242',
        activeTintColor: '#e8e8e8',
        showLabel: false,
      }}>
      <Tab.Screen name={screens.Home} component={Home} />
      <Tab.Screen name={screens.Other} component={Pictures} />
      <Tab.Screen name={screens.Experimental} component={Experimental} />
      <Tab.Screen name={screens.Settings} component={Settings} />
    </Tab.Navigator>
  </ScreenContext.Provider>
);

export default Tabs;
