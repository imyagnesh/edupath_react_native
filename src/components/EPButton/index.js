import React from 'react';
import {Pressable} from 'react-native';
import EPText from '../EPText';
import styles from '../../../commonStyle';

const EPButton = ({children, btnStyle, textStyle, textProps, highlighted, ...props}) => {
  const bgColor = highlighted ? { backgroundColor: 'darkblue' } : { backgroundColor: 'blue' };
  return (
    <Pressable style={[styles.btn, styles.center, btnStyle, bgColor]} {...props}>
      <EPText
        variant="body1"
        style={[styles.textWhite, styles.textCenter, textStyle]}
        {...textProps}>
        {children}
      </EPText>
    </Pressable>
  );
};

export default EPButton;
