import React from 'react';
import {Pressable, ActivityIndicator, View} from 'react-native';
import EPText from '../EPText';
import styles from '../../../commonStyle';
import {useTheme} from '@react-navigation/native';

const EPButton = ({
  children,
  disabled,
  btnStyle,
  textStyle,
  textProps,
  loading,
  ...props
}) => {
  const {colors} = useTheme();
  return (
    <Pressable
      style={[
        styles.btn,
        styles.center,
        {backgroundColor: disabled ? colors.card : colors.primary},
        btnStyle,
      ]}
      {...props}>
      <View style={[styles.row]}>
        {loading && (
          <ActivityIndicator size="small" animating color={colors.primary} />
        )}
        <EPText
          variant="body1"
          style={[styles.textCenter, textStyle, styles.paddingH8]}
          {...textProps}>
          {children}
        </EPText>
      </View>
    </Pressable>
  );
};

export default EPButton;
