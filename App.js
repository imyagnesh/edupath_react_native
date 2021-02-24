import React from 'react';
// import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {enableScreens} from 'react-native-screens';
import {createNativeStackNavigator} from 'react-native-screens/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import {createStackNavigator} from '@react-navigation/stack';
// import Login from './src/screens/Login';
// import Register from './src/screens/Register';
// import Splash from './src/screens/Splash';

enableScreens();
const Stack = createNativeStackNavigator();

const AuthStack = createNativeStackNavigator();

const Auth = () => {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        name="login"
        getComponent={() => require('./src/screens/Login').default}
      />
      <AuthStack.Screen
        name="registration"
        getComponent={() => require('./src/screens/Register').default}
      />
    </AuthStack.Navigator>
  );
};

const Tab = createBottomTabNavigator();

const Home = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="homePage"
        getComponent={() => require('./src/screens/Home').default}
      />
      <Tab.Screen
        name="likes"
        getComponent={() => require('./src/screens/Like').default}
      />
      <Tab.Screen
        name="settings"
        getComponent={() => require('./src/screens/Settings').default}
      />
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen
          name="splash"
          getComponent={() => require('./src/screens/Splash').default}
        />
        <Stack.Screen name="auth" component={Auth} />
        <Stack.Screen name="home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
