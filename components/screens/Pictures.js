import React, {useState, useEffect} from 'react';
import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';

const Pictures = ({navigation}) => {
  const [data, setData] = useState();

  useEffect(() => {}, []);

  return (
    <SafeAreaView style={{backgroundColor: '#152025'}}>
      <View style={styles.mainView}>
        <View style={styles.pictureRow}>
          <Image
            style={styles.image}
            source={{uri: 'https://bit.ly/3awTlbH'}}
          />
          <Image
            style={styles.image}
            source={{uri: 'https://bit.ly/3awTlbH'}}
          />
          <Image
            style={styles.image}
            source={{uri: 'https://bit.ly/3awTlbH'}}
          />
          <Image
            style={styles.image}
            source={{uri: 'https://bit.ly/3awTlbH'}}
          />
          <Image
            style={styles.image}
            source={{uri: 'https://bit.ly/3awTlbH'}}
          />
          <Image
            style={styles.image}
            source={{uri: 'https://bit.ly/3awTlbH'}}
          />
          <Image
            style={styles.image}
            source={{uri: 'https://bit.ly/3awTlbH'}}
          />
          <Image
            style={styles.image}
            source={{uri: 'https://bit.ly/3awTlbH'}}
          />
          <Image
            style={styles.image}
            source={{uri: 'https://bit.ly/3awTlbH'}}
          />
          <Image
            style={styles.image}
            source={{uri: 'https://bit.ly/3awTlbH'}}
          />
          <Image
            style={styles.image}
            source={{uri: 'https://bit.ly/3awTlbH'}}
          />
          <Image
            style={styles.image}
            source={{uri: 'https://bit.ly/3awTlbH'}}
          />
          <Image
            style={styles.image}
            source={{uri: 'https://bit.ly/3awTlbH'}}
          />
          <Image
            style={styles.image}
            source={{uri: 'https://bit.ly/3awTlbH'}}
          />
          <Image
            style={styles.image}
            source={{uri: 'https://bit.ly/3awTlbH'}}
          />
          <Image
            style={styles.image}
            source={{uri: 'https://bit.ly/3awTlbH'}}
          />
          <Image
            style={styles.image}
            source={{uri: 'https://bit.ly/3awTlbH'}}
          />
          <Image
            style={styles.image}
            source={{uri: 'https://bit.ly/3awTlbH'}}
          />
          <Image
            style={styles.image}
            source={{uri: 'https://bit.ly/3awTlbH'}}
          />
          <Image
            style={styles.image}
            source={{uri: 'https://bit.ly/3awTlbH'}}
          />
          <Image
            style={styles.image}
            source={{uri: 'https://bit.ly/3awTlbH'}}
          />
          <Image
            style={styles.image}
            source={{uri: 'https://bit.ly/3awTlbH'}}
          />
          <Image
            style={styles.image}
            source={{uri: 'https://bit.ly/3awTlbH'}}
          />
          <Image
            style={styles.image}
            source={{uri: 'https://bit.ly/3awTlbH'}}
          />
          <Image
            style={styles.image}
            source={{uri: 'https://bit.ly/3awTlbH'}}
          />
          <Image
            style={styles.image}
            source={{uri: 'https://bit.ly/3awTlbH'}}
          />
          <Image
            style={styles.image}
            source={{uri: 'https://bit.ly/3awTlbH'}}
          />
          <Image
            style={styles.image}
            source={{uri: 'https://bit.ly/3awTlbH'}}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainView: {
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#101520',
  },
  titleText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  pictureRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  image: {
    width: 64,
    height: 128,
  },
});

export default Pictures;
