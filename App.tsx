import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import SplashScreen from './screens/Authentication/LoginSignupScreen';
import RootStackScreen from './RootStackScreen';
import { NavigationContainer } from '@react-navigation/native';
import Colors from './constants/Colors';
import NumberVerification from './components/NumberVerification';
import OtpVerification from './screens/Authentication/OtpVerification';
import LoginSignupScreen from './screens/Authentication/LoginSignupScreen';

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      // <NavigationContainer>
      //   {/* <Navigation colorScheme={colorScheme} /> */}
      //   <StatusBar
      //     barStyle='dark-content'
      //     backgroundColor={Colors.DEFAULT_WHITE}
      //     translucent
      //   />
      //   <RootStackScreen />
      // </NavigationContainer>
      <OtpVerification />
      // <LoginSignupScreen />
    );
  }
}
