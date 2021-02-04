import React from 'react';
// import Root from './app';
import {Chat, Home} from '@screens/';
import {navigationRef} from '@navigations/index';
import Routes from '@navigations/routes';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const App = () => {
    return (
        <>
            <NavigationContainer ref={navigationRef}>
                <Stack.Navigator headerMode="none">
                    <Stack.Screen name={Routes.HOME_SCREEN} component={Home} />
                    <Stack.Screen name={Routes.CHAT_SCREEN} component={Chat} />
                </Stack.Navigator>
            </NavigationContainer>

            {/*<Root />*/}
        </>
    );
};


export default App;
