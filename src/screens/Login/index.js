import React, {useContext} from 'react';
import {View} from 'react-native';
import axios from '../../utils/axios';
import styles from '../../../commonStyle';
import EPText from '../../components/EPText';
import fields, {loginInitialValues} from './fields';
import EPForm from '../../components/EPForm';
import {storeData} from '../../utils';
import {UserContext} from '../../context/userContext';
import {useTheme} from '@react-navigation/native';

const Login = ({navigation}) => {
  const {colors} = useTheme();
  const {setUser} = useContext(UserContext);
  const onSubmit = async (value, actions) => {
    try {
      const res = await axios.post('auth/local', value);
      await storeData('token', res.data);
      setUser(res.data);
      actions.resetForm();
    } catch (e) {
      actions.setFieldError('serverError', e.message);
    }
  };

  const onClickRegister = () => {
    navigation.navigate('registration');
  };

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
      <EPText variant="body2" style={[styles.textCenter, styles.marginV8]}>
        Don't have an account,{' '}
        <EPText
          variant="body2"
          style={{color: colors.primary}}
          onPress={onClickRegister}>
          Register
        </EPText>
      </EPText>
    </View>
  );
};

export default Login;
