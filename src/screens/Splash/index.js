import React from 'react';
import {SafeAreaView, Text, Button} from 'react-native';

const Splash = ({navigation}) => {
  return (
    <SafeAreaView>
      <Text>Splash Screen</Text>
      <Button
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
      />
    </SafeAreaView>
  );
};

export default Splash;
