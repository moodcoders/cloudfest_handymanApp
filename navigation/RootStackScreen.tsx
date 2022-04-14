import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginSignupScreen from '../screens/Authentication/LoginSignupScreen';
import OtpVerification from '../screens/Authentication/OtpVerification';

const Stack = createNativeStackNavigator();

/**
 * RootStackScreen is Handling Navigation for Auth Screen
 */
const RootStackScreen = () => (
  <NavigationContainer>
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name='LoginSignupScreen' component={LoginSignupScreen} />
      <Stack.Screen name='OtpVerification' component={OtpVerification} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default RootStackScreen;
