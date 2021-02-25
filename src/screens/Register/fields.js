import {createRef} from 'react';
import EPTextInput from '../../components/EPTextInput';

const passwordInputRef = createRef();
const phoneInputRef = createRef();
const emailInputRef = createRef();

const fields = (handleSubmit) => [
  {
    component: EPTextInput,
    defaultValue: '',
    name: 'identifier',
    placeholder: 'Username',
    keyboardType: 'email-address',
    autoCompleteType: 'email',
    textContentType: 'emailAddress',
    returnKeyType: 'next',
    onSubmitEditing: () => {
      emailInputRef.current.focus();
    },
    validate: (value) => {
      if (!value) {
        return 'Username is required';
      }
    },
  },
  {
    component: EPTextInput,
    defaultValue: '',
    name: 'email',
    innerRef: emailInputRef,
    placeholder: 'Email',
    keyboardType: 'email-address',
    autoCompleteType: 'email',
    textContentType: 'emailAddress',
    returnKeyType: 'next',
    onSubmitEditing: () => {
      phoneInputRef.current.focus();
    },
    validate: (value) => {
      if (!value) {
        return 'Email is required';
      }
    },
  },
  {
    component: EPTextInput,
    defaultValue: '',
    name: 'phoneNumber',
    innerRef: phoneInputRef,
    placeholder: 'Phone Number',
    keyboardType: 'number-pad',
    autoCompleteType: 'tel',
    textContentType: 'telephoneNumber',
    returnKeyType: 'next',
    onSubmitEditing: () => {
      passwordInputRef.current.focus();
    },
    validate: (value) => {
      if (!value) {
        return 'Phone Number is required';
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
    onSubmitEditing: handleSubmit,
    validate: (value) => {
      if (!value) {
        return 'Password is required';
      }
    },
  },
];

export const RegisterInitialValues = fields(() => {}).reduce((p, c) => {
  return {...p, [c.name]: c.defaultValue};
}, {});

export default fields;
