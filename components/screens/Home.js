import React, {useContext} from 'react';
import {SafeAreaView, StatusBar, StyleSheet, Text, View} from 'react-native';

import {ScreenContext} from '../../navigation/Tabs';
import Card from '../Card';

const Home = ({navigation}) => {
  const screens = useContext(ScreenContext);

  return (
    <>
      <SafeAreaView style={{backgroundColor: '#152025'}}>
        <StatusBar barStyle="light-content" />
        <View style={styles.mainView}>
          <Text style={[styles.whiteText, styles.titleText]}>Welcome back</Text>
          <Text style={styles.whiteText}>Here's whats new:</Text>
          <Card subtitle={'Experimental'} title={'New Content'} />
          <Card
            title={'Cool Pics'}
            backgroundColor={'#2288bb'}
            target={screens.Other}
          />
          <Card title={'Awesome'} backgroundColor={'#22bb22'} />
        </View>
      </SafeAreaView>
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
