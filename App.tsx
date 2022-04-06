import { useState } from 'react';
import { StatusBar } from 'react-native';

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
