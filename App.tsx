import { useState } from 'react';
import { View } from './components/Themed';
import { StatusBar, ActivityIndicator } from 'react-native';

import { AuthContext } from './constants/Context';
import Colors from './constants/Colors';
import Navigation from './navigation';
import RootStackScreen from './navigation/RootStackScreen';
import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';

/**
 * App Component is the Parent Component where all component interact with each other
 *
 * @returns Statusbar, Auth Page Route and Root Route
 *
 */
export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();
  const [myState, setMyState] = useState<boolean>(true);

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
        {myState ? (
          <AuthContext.Provider value={{ myState, setMyState }}>
            <RootStackScreen />
          </AuthContext.Provider>
        ) : (
          <Navigation colorScheme={colorScheme} />
        )}
      </>
    );
  }
}
