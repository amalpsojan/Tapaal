import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Home} from '@screens/';
import Routes from '../routes';

const Stack = createStackNavigator();

export default (props) => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name={Routes.HOME_SCREEN} component={Home} />
    </Stack.Navigator>
  );
};
