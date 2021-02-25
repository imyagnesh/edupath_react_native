import {createRef} from 'react';
import EPTextInput from '../../components/EPTextInput';

const passwordInputRef = createRef();
const confirmPasswordInputRef = createRef();

const fields = (handleSubmit) => [
  {
    component: EPTextInput,
    defaultValue: '',
    name: 'username',
    placeholder: 'Username',
    keyboardType: 'email-address',
    autoCompleteType: 'email',
    textContentType: 'emailAddress',
    returnKeyType: 'next',
    onSubmitEditing: () => {
      passwordInputRef.current.focus();
    },
    validate: (value) => {
      if (!value) {
        return 'Username is required';
      }
    },
  },
  {
    component: EPTextInput,
    name: 'password',
    defaultValue: '',
    innerRef: passwordInputRef,
    placeholder: 'Password',
    autoCompleteType: 'password',
    secureTextEntry: true,
    textContentType: 'password',
    returnKeyType: 'done',
    onSubmitEditing: () => {
      confirmPasswordInputRef.current.focus();
    },
    validate: (value) => {
      if (!value) {
        return 'Password is required';
      }
    },
  },
  {
    component: EPTextInput,
    name: 'confirmPassword',
    defaultValue: '',
    innerRef: confirmPasswordInputRef,
    placeholder: 'Confirm Password',
    autoCompleteType: 'password',
    secureTextEntry: true,
    textContentType: 'password',
    returnKeyType: 'done',
    onSubmitEditing: handleSubmit,
    validate: (value) => {
      if (!value) {
        return 'Confirm Password is required';
      }
    },
  },
];

export const loginInitialValues = fields.reduce((p, c) => {
  return {...p, [c.name]: c.defaultValue};
}, {});

export default fields;
