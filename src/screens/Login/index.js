import React, {useContext, memo, useCallback, useMemo} from 'react';
import {View} from 'react-native';
import axios from '../../utils/axios';
import styles from '../../../commonStyle';
import EPText from '../../components/EPText';
import fields, {loginInitialValues} from './fields';
import EPForm from '../../components/EPForm';
import {storeData} from '../../utils';
import {UserContext} from '../../context/userContext';

const Login = ({navigation}) => {
  const {setUser} = useContext(UserContext);

  const onSubmit = useCallback(
    async (value, actions) => {
      console.log(value);
      try {
        const res = await axios.post('auth/local', value);
        await storeData('token', res.data);
        setUser(res.data);
        actions.resetForm();
      } catch (e) {
        actions.setFieldError('serverError', e.message);
      }
    },
    [setUser],
  );

  return (
    <View style={[styles.flex, styles.margin8]}>
      <EPText variant="h1" style={[styles.textCenter, styles.marginV8]}>
        Login
      </EPText>
      <EPForm
        initialValues={loginInitialValues}
        onSubmit={onSubmit}
        fields={fields}
        btnText="Submit"
      />
    </View>
  );
};

export default memo(Login);
