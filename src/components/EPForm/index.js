import React from 'react';
import {Formik, Field} from 'formik';
import {View} from 'react-native';
import EPButton from '../EPButton';
import styles from '../../../commonStyle';
import EPText from '../EPText';

const EPForm = ({fields, btnText, ...rest}) => {
  return (
    <Formik {...rest}>
      {({handleSubmit, isSubmitting, errors}) => (
        <>
          {errors?.serverError && (
            <EPText
              variant="error"
              style={[styles.textCenter, styles.paddingV12]}>
              {errors.serverError}
            </EPText>
          )}
          {fields(handleSubmit).map((x) => (
            <View style={[styles.marginV8]} key={x.name}>
              <Field {...x} />
            </View>
          ))}
          <EPButton
            disabled={isSubmitting}
            loading={isSubmitting}
            btnStyle={[styles.marginV8]}
            onPress={handleSubmit}>
            {btnText}
          </EPButton>
        </>
      )}
    </Formik>
  );
};

export default EPForm;
