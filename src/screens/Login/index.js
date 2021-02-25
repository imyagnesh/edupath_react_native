import React from 'react';
import {View} from 'react-native';
import {Formik, Field} from 'formik';
import styles from '../../../commonStyle';
import EPText from '../../components/EPText';
import EPButton from '../../components/EPButton';
import fields, {loginInitialValues} from './fields';

const Login = ({navigation}) => {
  const onSubmit = async (value) => {};
  return (
    <View style={[styles.flex, styles.margin8]}>
      <EPText variant="h1" style={[styles.textCenter, styles.marginV8]}>
        Login
      </EPText>
      <Formik initialValues={loginInitialValues} onSubmit={onSubmit}>
        {({handleSubmit}) => (
          <>
            {fields(handleSubmit).map((x) => (
              <View style={[styles.marginV8]}>
                <Field {...x} />
              </View>
            ))}
            <EPButton btnStyle={[styles.marginV8]} onPress={handleSubmit}>
              Submit
            </EPButton>
          </>
        )}
      </Formik>
    </View>
  );
};

export default Login;
