import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {SignIn, SignUp} from '@screens/';
import Routes from '../routes';

const Stack = createStackNavigator();

export default (props) => {
  return (
    <Stack.Navigator headerMode="screen" initialRouteName={Routes.SIGNIN}>
      <Stack.Screen
        name={Routes.SIGNIN_SCREEN}
        options={{
          title: 'Sign In',
        }}
        component={SignIn}
      />
      <Stack.Screen
        name={Routes.SIGNUP_SCREEN}
        options={{
          title: 'Sign Up',
        }}
        component={SignUp}
      />
    </Stack.Navigator>
  );
};
