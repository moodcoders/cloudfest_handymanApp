import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import SplashScreen from './screens/Authentication/LoginSignupScreen';
import RootStackScreen from './navigation/RootStackScreen';
import { NavigationContainer } from '@react-navigation/native';
import Colors from './constants/Colors';
import NumberVerification from './components/NumberVerification';
import OtpVerification from './screens/Authentication/OtpVerification';
import LoginSignupScreen from './screens/Authentication/LoginSignupScreen';
import { useState, createContext } from 'react';

interface ctx {
  myState: Boolean;
  setMyState: React.Dispatch<React.SetStateAction<boolean>>;
}

export const UserContext = createContext<ctx | null>(null);

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();
  const [myState, setMyState] = useState<boolean>(true);

  const setButton = () => {
    setMyState(true);
  };

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <>
        <StatusBar
          barStyle='dark-content'
          backgroundColor={Colors.DEFAULT_WHITE}
          translucent
        />
        {myState ? (
          <UserContext.Provider value={{ myState, setMyState }}>
            <RootStackScreen />
          </UserContext.Provider>
        ) : (
          <Navigation colorScheme={colorScheme} />
        )}
      </>
    );
  }
}
