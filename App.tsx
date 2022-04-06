import { useState, useMemo, useEffect } from 'react';
import { View } from './components/Themed';
import { StatusBar, ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { AuthContext } from './constants/Context';
import Navigation from './navigation';
import RootStackScreen from './navigation/RootStackScreen';
import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
// import { validateOtp } from './services/otp';
/**
 * App Component is the Parent Component where all component interact with each other
 *
 * @returns Statusbar, Auth Page Route and Root Route
 *
 */
export default function App() {
  const { isLoadingComplete, setLoadingComplete } = useCachedResources();
  const colorScheme = useColorScheme();
  const [userToken, setUserToken] = useState<null | string>(null);

  const authContext = useMemo(
    () => ({
      signIn: async (handymanToken: string) => {
        setUserToken(handymanToken);
        try {
          await AsyncStorage.setItem('token', handymanToken);
        } catch (e) {
          console.log(e);
        }
        // setLoadingComplete(!isLoadingComplete);
      },
      signOut: async () => {
        // setUserToken(null);
        // setLoadingComplete(!isLoadingComplete);
        try {
          await AsyncStorage.removeItem('token');
        } catch (e) {
          console.log(e);
        }
      },
    }),
    [],
  );

  useEffect(() => {
    setTimeout(async () => {
      let handymanToken = null;
      try {
        const value = await AsyncStorage.getItem('token');
        console.log(value);
        if (value !== null) {
          // value previously stored
        }
      } catch (e) {
        // error reading value
      }
    }, 1000);
  }, []);

  if (!isLoadingComplete) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size='large' />
      </View>
    );
  } else {
    return (
      <>
        <StatusBar
          barStyle='dark-content'
          translucent={false}
          backgroundColor='transparent'
        />
        {userToken === null ? (
          <AuthContext.Provider value={authContext}>
            <RootStackScreen />
          </AuthContext.Provider>
        ) : (
          <Navigation colorScheme={colorScheme} />
        )}
      </>
    );
  }
}
