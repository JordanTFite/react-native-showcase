import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import client from '../../config/apiConfig';
import StyledSafeView from '../StyledSafeView';

const Experimental = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const {data: response} = await client.get('http://localhost:8000/data');
        setLoading(false);
        setData(response);
      } catch (err) {
        console.error(err);
      }
    })();
  }, []);

  return (
    <StyledSafeView>
      <View style={styles.mainView}>
        <View style={styles.title}>
          <Text style={[styles.text, styles.titleText]}>Users</Text>
        </View>
        {loading && <ActivityIndicator size={'large'} style={{padding: 10}} />}
        {data && (
          <FlatList
            style={styles.list}
            data={data}
            renderItem={UserCard}
            keyExtractor={i => i.id}
          />
        )}
      </View>
    </StyledSafeView>
  );
};

const UserCard = ({item}) => {
  const {name, isActive, balance} = item;

  return (
    <View style={styles.userWrapper}>
      <View>
        <Text style={[styles.text, styles.textLarge]}>{name}</Text>
        <Text
          style={[
            styles.text,
            {
              fontWeight: 'bold',
              color: isActive ? '#36f738' : '#f63737',
            },
          ]}>
          {isActive ? 'Online' : 'Offline'}
        </Text>
      </View>
      <Text style={[styles.text, styles.balanceText]}>{balance}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    alignItems: 'center',
    backgroundColor: '#101520',
    height: '100%',
  },
  text: {
    color: 'white',
  },
  textLarge: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  titleText: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  balanceText: {
    fontSize: 20,
    fontWeight: '300',
    alignItems: 'center',
  },
  userWrapper: {
    width: '100%',
    borderBottomWidth: 2,
    borderBottomColor: '#3e3e3e',
    paddingVertical: 10,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  list: {
    width: '100%',
    color: 'white',
  },
  title: {
    padding: 15,
    width: '100%',
    borderBottomWidth: 2,
    borderBottomColor: '#f0f6f0',
    alignItems: 'center',
  },
});

export default Experimental;
