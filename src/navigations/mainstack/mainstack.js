import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Home} from '_screens/';
import Routes from '../Routes';

const Stack = createStackNavigator();

export default (props) => {
  return (
    <Stack.Navigator headerMode="screen">
      <Stack.Screen
        name={Routes.HOME}
        // options={{headerShown: false}}
        component={Home}
      />
    </Stack.Navigator>
  );
};
