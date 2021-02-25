import {useTheme} from '@react-navigation/native';
import React, {forwardRef} from 'react';
import {TextInput} from 'react-native';
import EPText from '../EPText';
import styles from './styles';

const EPTextInput = ({
  field: {name, value, onBlur},
  form: {touched, errors, handleChange, handleBlur}, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  style,
  innerRef,
  ...props
}) => {
  const {colors, dark} = useTheme();
  return (
    <>
      <TextInput
        ref={innerRef}
        name={name}
        value={value}
        style={[
          styles.textInput,
          {borderColor: colors.border, color: colors.text},
          style,
        ]}
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

export default EPTextInput;
