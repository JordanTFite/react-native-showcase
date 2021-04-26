import React, {useContext} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {NavigationContext} from '@react-navigation/native';

const Card = ({
  backgroundColor = '#8822BB',
  title = 'Default',
  subtitle,
  target,
}) => {
  const navigation = useContext(NavigationContext);

  const handlePress = () => {
    if (target) {
      navigation.navigate(target);
    }
  };

  return (
    <TouchableOpacity
      style={[styles.card, {backgroundColor}]}
      onPress={handlePress}>
      <View style={{padding: 15, flex: 1, justifyContent: 'flex-end'}}>
        {subtitle && <Text style={styles.cardSubtitle}>{subtitle}</Text>}
        <Text style={styles.cardTitle}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#8822BB',
    borderRadius: 10,
    width: '100%',
    height: 150,
    marginTop: 10,
  },
  cardTitle: {
    color: '#e3e3e3',
    fontWeight: 'bold',
    fontSize: 28,
  },
  cardSubtitle: {
    color: '#CC66EE',
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default Card;
