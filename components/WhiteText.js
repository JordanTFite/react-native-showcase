import React from 'react';
import {Text} from 'react-native';

const WhiteText = ({children, fontWeight = 'bold', fontSize = 14}) => (
  <Text style={{color: '#f0f6f0', fontWeight, fontSize}}>{children}</Text>
);

export default WhiteText;
