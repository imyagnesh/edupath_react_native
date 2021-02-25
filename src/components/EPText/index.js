import {useTheme} from '@react-navigation/native';
import React from 'react';
import {Text} from 'react-native';
import styles from './styles';

const EPText = ({children, variant, style, ...rest}) => {
  const {colors} = useTheme();
  return (
    <Text
      style={[
        styles[variant],
        {color: variant === 'error' ? colors.notification : colors.text},
        style,
      ]}
      allowFontScaling={false}
      {...rest}>
      {children}
    </Text>
  );
};

export default EPText;
