import React, {memo} from 'react';
import {connect} from 'react-redux';
import {View} from 'react-native';
import styles from '../../../commonStyle';
import EPText from '../../components/EPText';
import fields, {loginInitialValues} from './fields';
import EPForm from '../../components/EPForm';

const Login = ({navigation, user, onLogin}) => {
  // const {setUser} = useContext(UserContext);

  // const onSubmit = useCallback(
  //   async (value, actions) => {
  //     try {
  //       const res = await axios.post('auth/local', value);
  //       await storeData('token', res.data);
  //       setUser(res.data);
  //       actions.resetForm();
  //     } catch (e) {
  //       actions.setFieldError('serverError', e.message);
  //     }
  //   },
  //   [setUser],
  // );

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
        onSubmit={onLogin}
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

const mapStoreToProps = (store) => {
  return {user: store.user};
};

const mapDispatchToProps = (dispatch) => {
  return {
    onLogin: (value, actions) =>
      dispatch({type: 'FETCH_USER_REQUEST', payload: value, meta: actions}),
  };
};

export default connect(mapStoreToProps, mapDispatchToProps)(memo(Login));
