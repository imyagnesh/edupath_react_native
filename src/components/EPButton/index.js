import React from 'react';
import {Pressable} from 'react-native';
import EPText from '../EPText';
import styles from '../../../commonStyle';
import {useTheme} from '@react-navigation/native';

const EPButton = ({children, btnStyle, textStyle, textProps, ...props}) => {
  const {colors} = useTheme();
  return (
    <Pressable
      style={[
        styles.btn,
        styles.center,
        {backgroundColor: colors.primary},
        btnStyle,
      ]}
      {...props}>
      <EPText
        variant="body1"
        style={[styles.textCenter, textStyle]}
        {...textProps}>
        {children}
      </EPText>
    </Pressable>
  );
};

export default EPButton;
