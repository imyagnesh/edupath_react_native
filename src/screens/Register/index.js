import React, {useContext} from 'react';
import {View} from 'react-native';
import axios from 'axios';
import styles from '../../../commonStyle';
import EPText from '../../components/EPText';
import fields, {RegisterInitialValues} from './fields';
import EPForm from '../../components/EPForm';
import {storeData} from '../../utils';
import {UserContext} from '../../context/userContext';

const Register = ({navigation}) => {
  const {setUser} = useContext(UserContext);
  const onSubmit = async (value, actions) => {
    console.log(value);
    try {
      const res = await axios.post(
        'https://jsonplaceholder.typicode.com/posts',
        value,
        {
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json; charset=utf-8',
          },
        },
      ); // need a legit API
      await storeData('token', res.data);
      setUser(res.data);
    } catch (e) {
      actions.setFieldError('serverError', e.message);
    }
  };

  return (
    <View style={[styles.flex, styles.margin8]}>
      <EPText variant="h1" style={[styles.textCenter, styles.marginV8]}>
        Register
      </EPText>
      <EPForm
        initialValues={RegisterInitialValues}
        onSubmit={onSubmit}
        fields={fields}
        btnText="Register"
      />
    </View>
  );
};

export default Register;
