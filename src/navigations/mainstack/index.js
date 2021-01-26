import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Routes from '../Routes';
import HomeStack from './mainstack';

const Stack = createStackNavigator();

export default (props) => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={Routes.HOME_STACK} component={HomeStack} />
    </Stack.Navigator>
  );
};
