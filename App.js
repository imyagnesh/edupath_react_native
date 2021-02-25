import React, {useEffect, useState} from 'react';
// import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {enableScreens} from 'react-native-screens';
import {createNativeStackNavigator} from 'react-native-screens/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {AppearanceProvider, useColorScheme} from 'react-native-appearance';
import {getData} from './src/utils';
import {EPDarkTheme, EPLightTheme} from './src/theme';
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
  const [isAuth, setIsAuth] = useState(false);
  const scheme = useColorScheme();

  useEffect(() => {
    const checkAUTH = async () => {
      const token = await getData('token');
      if (token) {
        setIsAuth(true);
      } else {
        setIsAuth(false);
      }
    };
    checkAUTH();
  }, []);
  return (
    <AppearanceProvider>
      <NavigationContainer
        theme={scheme === 'dark' ? EPDarkTheme : EPLightTheme}>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          {!isAuth && <Stack.Screen name="auth" component={Auth} />}
          {isAuth && <Stack.Screen name="home" component={Home} />}
        </Stack.Navigator>
      </NavigationContainer>
    </AppearanceProvider>
  );
};

export default App;
