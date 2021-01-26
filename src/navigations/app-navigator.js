import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {navigationRef, isMountedRef} from './index';

import Routes from './Routes';

// Screens Objects
import AuthStack from './authstack';
import MainStack from './mainstack';
import {useAppContext} from '_services/auth/app-context';
import {APP_STATE} from '_constants/';
import {Splash} from '_screens/';

const Stack = createStackNavigator();

const RootNavigation = (props) => {
  React.useEffect(() => {
    isMountedRef.current = true;
    return () => (isMountedRef.current = false);
  }, []);

  const {state} = useAppContext();

  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator headerMode="none">
        {state === APP_STATE.USER ? (
          <Stack.Screen name={Routes.MAIN_APP} component={MainStack} />
        ) : state === APP_STATE.GUEST ? (
          <Stack.Screen name={Routes.AUTH_STACK} component={AuthStack} />
        ) : (
          <Stack.Screen name={Routes.SPLASH} component={Splash} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
