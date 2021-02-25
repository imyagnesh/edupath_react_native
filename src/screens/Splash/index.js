import React, {useEffect} from 'react';
import {SafeAreaView} from 'react-native';
import {getData} from '../../utils';
import styles from '../../../commonStyle';
import EPText from '../../components/EPText';

const Splash = ({navigation: {navigate}}) => {
  return (
    <SafeAreaView style={[styles.flex, styles.center]}>
      <EPText variant="h1">Splash Screen</EPText>
      {/* <Button
        title="Auth"
        onPress={() => {
          navigation.navigate('auth');
        }}
      />
      <Button
        title="Home"
        onPress={() => {
          navigation.navigate('home');
        }}
      /> */}
    </SafeAreaView>
  );
};

export default Splash;
