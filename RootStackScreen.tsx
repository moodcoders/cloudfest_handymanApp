import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginSignupScreen from './screens/Authentication/LoginSignupScreen';
import NumberVerification from './components/NumberVerification';
// import LoginSignupScreen from './screens/Authentication/LoginSignupScreen';
import OtpVerification from './screens/Authentication/OtpVerification';

const Stack = createNativeStackNavigator();
const RootStackScreen = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <Stack.Screen name='LoginSignupScreen' component={LoginSignupScreen} />
    <Stack.Screen name='OtpVerification' component={OtpVerification} />
  </Stack.Navigator>
);

export default RootStackScreen;
