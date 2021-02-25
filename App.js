import React, {useContext} from 'react';
// import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {enableScreens} from 'react-native-screens';
import {createNativeStackNavigator} from 'react-native-screens/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {AppearanceProvider, useColorScheme} from 'react-native-appearance';
import {EPDarkTheme, EPLightTheme} from './src/theme';
import UserProvider, {UserContext} from './src/context/userContext';
import {ActivityIndicator, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './commonStyle';

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

const HomeStack = createNativeStackNavigator();

const HomeScreen = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="homePage"
        getComponent={() => require('./src/screens/Home').default}
      />
    </HomeStack.Navigator>
  );
};

const Tab = createBottomTabNavigator();

const Home = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="homePage"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size, focused}) => (
            <Icon
              name={focused ? 'home' : 'home-outline'}
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="likes"
        getComponent={() => require('./src/screens/Like').default}
        options={{
          tabBarLabel: 'Likes',
          tabBarIcon: ({color, size, focused}) => (
            <Icon
              name={focused ? 'heart' : 'heart-outline'}
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="settings"
        getComponent={() => require('./src/screens/Settings').default}
        options={{
          tabBarLabel: 'Settings',
          tabBarIcon: ({color, size, focused}) => (
            <Icon
              name={focused ? 'settings' : 'settings-outline'}
              color={color}
              size={size}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const AppContainer = () => {
  const scheme = useColorScheme();
  const {user, loading} = useContext(UserContext);

  const theme = scheme === 'dark' ? EPDarkTheme : EPLightTheme;

  if (loading) {
    return (
      <View style={[styles.flex, styles.center]}>
        <ActivityIndicator
          animating
          size="large"
          color={theme.colors.primary}
        />
      </View>
    );
  }

  return (
    <AppearanceProvider>
      <NavigationContainer theme={theme}>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          {!user && <Stack.Screen name="auth" component={Auth} />}
          {user && <Stack.Screen name="home" component={Home} />}
        </Stack.Navigator>
      </NavigationContainer>
    </AppearanceProvider>
  );
};

const App = () => (
  <UserProvider>
    <AppContainer />
  </UserProvider>
);

export default App;
