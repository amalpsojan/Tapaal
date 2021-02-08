import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

// Screens Objects

import {useAppContext} from '@services/auth/app-context';
import {Splash} from '@screens/';
import {APP_STATE} from '@constants/index';
import {isMountedRef, navigationRef} from '@navigations/index';
import Routes from '@navigations/routes';
import Main from '@navigations/mainstack';
import Auth from '@navigations/authstack';

const Stack = createStackNavigator();

const RootNavigation = (props) => {
  React.useEffect(() => {
    isMountedRef.current = true;
    return () => (isMountedRef.current = false);
  }, []);

  const {appState} = useAppContext();

  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator headerMode="none">
        {appState === APP_STATE.USER ? (
          <Stack.Screen name={Routes.MAIN_APP} component={Main} />
        ) : appState === APP_STATE.GUEST ? (
          <Stack.Screen name={Routes.AUTH_STACK} component={Auth} />
        ) : (
          <Stack.Screen name={Routes.SPLASH_SCREEN} component={Splash} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
