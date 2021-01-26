import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {SignIn, SignUp} from '_screens/';
import Routes from '../Routes';

const Stack = createStackNavigator();

export default (props) => {
  return (
    <Stack.Navigator headerMode="screen" initialRouteName={Routes.SIGNIN}>
      <Stack.Screen
        name={Routes.SIGNIN}
        // options={{headerShown: false}}
        component={SignIn}
      />
      <Stack.Screen
        name={Routes.SIGNUP}
        // options={{headerShown: false}}
        component={SignUp}
      />
    </Stack.Navigator>
  );
};
