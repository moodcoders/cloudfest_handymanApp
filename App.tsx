import { View, Text } from './components/Themed';
import { StatusBar, ActivityIndicator } from 'react-native';

import { AuthContext } from './constants/Context';
import Navigation from './navigation';
import RootStackScreen from './navigation/RootStackScreen';
import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import BookingStatus from './screens/BookingStatus/BookingStatus';

/**
 * App Component is the Parent Component where all component interact with each other
 *
 * @returns Statusbar, Auth Page Route and Root Route
 *
 */
export default function App() {
  const { authContext, ...authState } = useCachedResources();
  const colorScheme = useColorScheme();

  if (authState.isLoadingComplete) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size='large' color='#35B2E6' />
        <Text>Loading.....</Text>
      </View>
    );
  }
  return (
    <>
      <StatusBar
        barStyle='dark-content'
        translucent={false}
        backgroundColor='transparent'
      />
      {authState.handymanToken === null ? (
        <AuthContext.Provider value={authContext}>
          <RootStackScreen />
        </AuthContext.Provider>
      ) : (
        <Navigation colorScheme={colorScheme} />
      )}
    </>
  );
  // return (
  //   <>
  //     <StatusBar
  //       barStyle='dark-content'
  //       translucent={false}
  //       backgroundColor='transparent'
  //     />
  //     <BookingStatus />
  //   </>
  // );
}
