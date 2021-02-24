import React from 'react';
import {Text} from 'react-native';
import styles from './styles';

const EPText = ({children, variant, style, ...rest}) => {
  return (
    <Text style={[styles[variant], style]} allowFontScaling={false} {...rest}>
      {children}
    </Text>
  );
};

export default EPText;
