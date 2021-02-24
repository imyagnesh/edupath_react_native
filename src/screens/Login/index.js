import React from 'react';
import {View, Text, Button} from 'react-native';

const Login = ({navigation}) => {
  return (
    <View>
      <Text>Login Page screen</Text>
      <Button
        title="Register"
        onPress={() => {
          navigation.navigate('registration');
        }}
      />
    </View>
  );
};

export default Login;
