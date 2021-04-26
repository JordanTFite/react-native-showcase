import React, {useContext, useState, useEffect} from 'react';
import {StatusBar, StyleSheet, Text, View} from 'react-native';

import {ScreenContext} from '../../navigation/Tabs';
import {SettingsContext} from '../../App';
import Card from '../Card';
import StyledSafeView from '../StyledSafeView';

const Home = () => {
  const screens = useContext(ScreenContext);
  const {state: settings} = useContext(SettingsContext);

  return (
    <>
      <StyledSafeView>
        <StatusBar barStyle="light-content" />
        <View style={styles.mainView}>
          <Text style={[styles.whiteText, styles.titleText]}>
            {settings.name ? `Welcome back, ${settings.name}!` : 'Welcome back'}
          </Text>
          <Text style={styles.whiteText}>Here's whats new:</Text>
          <Card
            title={'Cool Pics'}
            backgroundColor={'#2288bb'}
            target={screens.Other}
          />
          <Card
            subtitle={'Experimental'}
            title={'Users'}
            target={screens.Experimental}
          />
          <Card
            title={'Settings'}
            backgroundColor={'#00bb22'}
            target={screens.Settings}
          />
        </View>
      </StyledSafeView>
    </>
  );
};

const styles = StyleSheet.create({
  mainView: {
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#101520',
    height: '100%',
  },
  titleText: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  menuButton: {
    padding: 5,
  },
  whiteText: {
    color: '#e6e6e6',
    fontSize: 18,
  },
});

export default Home;
