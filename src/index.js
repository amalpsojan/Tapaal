import React from 'react';
// import Root from './app';
import {Chat, Home, Chats, Calls} from '@screens/';
import {navigationRef} from '@navigations/index';
import Routes from '@navigations/routes';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Stack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();

const App = () => {
    return (
        <>
            <NavigationContainer ref={navigationRef}>
                <Stack.Navigator headerMode="none">
                    <Stack.Screen name={Routes.TAB_STACK} component={MyTabs}/>
                    <Stack.Screen name={Routes.CHAT_SCREEN} component={Chat}/>
                </Stack.Navigator>
            </NavigationContainer>

            {/*<Root />*/}
        </>
    );
};

function MyTabs() {
    return (
        <Tab.Navigator>
            <Tab.Screen name={Routes.HOME_SCREEN} component={Home} options={{ title: 'Home' }}/>
            <Tab.Screen name={Routes.CHATS_SCREEN} component={Chats} options={{ title: 'Status' }} />
            <Tab.Screen name={Routes.CALLS_SCREEN} component={Calls} options={{ title: 'Calls' }} />
        </Tab.Navigator>
    );
}


export default App;
