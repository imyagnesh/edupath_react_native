import {useTheme} from '@react-navigation/native';
import React, {forwardRef} from 'react';
import {TextInput} from 'react-native';
import EPText from '../EPText';
import styles from './styles';

const EPTextInput = ({
  field, // { name, value, onChange, onBlur }
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
        style={[
          styles.textInput,
          {borderColor: colors.border, color: colors.text},
          style,
        ]}
        keyboardAppearance={dark ? 'dark' : 'light'}
        {...field}
        {...props}
        onChangeText={handleChange(field.name)}
        onBlur={handleBlur(field.name)}
      />
      {touched[field.name] && errors[field.name] && (
        <EPText variant="error">{errors[field.name]}</EPText>
      )}
    </>
  );
};

export default EPTextInput;
