import React from 'react';
import {SafeAreaView} from 'react-native';

const StyledSafeView = ({children}) => {
  return (
    <SafeAreaView style={{backgroundColor: '#152025'}}>{children}</SafeAreaView>
  );
};

export default StyledSafeView;
