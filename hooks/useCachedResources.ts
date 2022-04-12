import { useEffect, useMemo, useReducer } from 'react';
import { FontAwesome } from '@expo/vector-icons';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface authType {
  isLoadingComplete: boolean,
  handymanToken: null | string
}

/**
 * useCachedResources is a hook which is handling SIGNIN SIGNUP and storing the token of a User
 */
export default function useCachedResources() {
  const initialAuthState: authType = {
    isLoadingComplete: true,
    handymanToken: null
  }

  const authReducer = (prevState: any, action: any) => {
    switch (action.type) {
      case 'RETRIEVE_TOKEN':
        return {
          ...prevState,
          handymanToken: action.token,
          isLoadingComplete: false
        }
      case 'LOGIN':
        return {
          ...prevState,
          handymanToken: action.token,
          isLoadingComplete: false
        }
      case 'LOGOUT':
        return {
          ...prevState,
          handymanToken: null,
          isLoadingComplete: false
        }
      default:
        throw new Error();
    }
  }
  const [authState, dispatch] = useReducer(authReducer, initialAuthState)

  //This method is using cached value and not allowing the function to build from scratch on every render
  const authContext = useMemo(
    () => ({
      signIn: async (handymanToken: string) => {
        try {
          await AsyncStorage.setItem('token', handymanToken);
        } catch (e) {
          console.log(e);
        }
        dispatch({ type: 'LOGIN', token: handymanToken })
      },

      signOut: async () => {
        try {
          await AsyncStorage.removeItem('token');
        } catch (e) {
          console.log(e);
        }
        dispatch({ type: 'LOGOUT' })
      },
    }),
    [],
  );

  // Load any resources or data that we need prior to rendering the app
  useEffect(() => {
    setTimeout(async () => {
      async function loadResourcesAndDataAsync() {
        let token: null | string = null;
        token = null
        try {
          SplashScreen.preventAutoHideAsync();

          // Load fonts
          await Font.loadAsync({
            ...FontAwesome.font,
            'space-mono': require('../assets/fonts/SpaceMono-Regular.ttf'),
          }
          );
          try {
            token = await AsyncStorage.getItem('token')
          } catch (e) {
            console.log(e)
          }
        } catch (e) {
          // We might want to provide this error information to an error reporting service
          console.warn(e);
        } finally {
          dispatch({ type: 'RETRIEVE_TOKEN', token: token })
          SplashScreen.hideAsync();
        }
      }
      loadResourcesAndDataAsync();
    }, 1000)
  }, []);
  return {
    ...authState, authContext
  };
}
