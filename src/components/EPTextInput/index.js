import {useTheme} from '@react-navigation/native';
import React, {memo, useState} from 'react';
import {Pressable, TextInput} from 'react-native';
import VisibilityIcon from '../../assets/icons/visibility.svg';
import VisibilityOffIcon from '../../assets/icons/visibility_off.svg';
import EPText from '../EPText';
import styles from './styles';

const EPTextInput = ({
  field: {name, value, onBlur},
  form: {touched, errors, handleChange, handleBlur}, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  style,
  innerRef,
  secureTextEntry,
  ...props
}) => {
  const {colors, dark} = useTheme();
  const [isSecureText, setIsSecureText] = useState(secureTextEntry);

  return (
    <>
      {secureTextEntry && (
        <Pressable
          onPress={() => setIsSecureText(!isSecureText)}
          style={[styles.eyeIcon]}>
          {isSecureText ? (
            <VisibilityOffIcon width={24} height={24} fill={colors.primary} />
          ) : (
            <VisibilityIcon width={24} height={24} fill={colors.primary} />
          )}
        </Pressable>
      )}
      <TextInput
        ref={innerRef}
        name={name}
        value={value}
        style={[
          styles.textInput,
          {borderColor: colors.border, color: colors.text},
          style,
        ]}
        secureTextEntry={isSecureText}
        keyboardAppearance={dark ? 'dark' : 'light'}
        {...props}
        onChangeText={handleChange(name)}
        onBlur={handleBlur(name)}
      />
      {touched[name] && errors[name] && (
        <EPText variant="error">{errors[name]}</EPText>
      )}
    </>
  );
};

export default memo(EPTextInput);
