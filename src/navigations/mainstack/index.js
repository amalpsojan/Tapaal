import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Routes from '@navigations/routes';
import TabStack from '@navigations/mainstack/TabStack';
import {Chat} from '@screens/index';

const Stack = createStackNavigator();

export default (props) => {
    return (
        <Stack.Navigator headerMode="none">
            <Stack.Screen name={Routes.HOME_STACK} component={TabStack}/>
            <Stack.Screen name={Routes.CHAT_SCREEN} component={Chat}/>
        </Stack.Navigator>
    );
};
