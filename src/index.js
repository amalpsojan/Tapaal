import React from 'react';
import {TouchableOpacity, View} from 'react-native';
// import Root from './app';
import {Chat, Status, Chats, Calls, Camera} from '@screens/';
import {navigationRef} from '@navigations/index';
import Routes from '@navigations/routes';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Colors from '@styles/colors';
import {FONT_SIZE_12, FONT_SIZE_20} from '@styles/typography';
import {Text} from '@components/text/text';
import {Header} from '@components/header/Header';
import IonIcon from 'react-native-vector-icons/Ionicons';

const Stack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();

const appName = 'Tapaal';

const App = () => {
    return (
        <>
            <NavigationContainer ref={navigationRef}>
                <Stack.Navigator headerMode="none">
                    <Stack.Screen name={Routes.HOME_STACK} component={HomeStack}/>
                    <Stack.Screen name={Routes.CHAT_SCREEN} component={Chat}/>
                </Stack.Navigator>
            </NavigationContainer>

            {/*<Root />*/}
        </>
    );
};

function HomeStack() {
    return (<>
            <Header
                title={appName}
                textStyle={{color: Colors.secondaryText, fontSize: FONT_SIZE_20}}
                containerStyle={{backgroundColor: Colors.primary, padding: 5, paddingHorizontal: 15}}/>
            <Tab.Navigator
                initialRouteName={Routes.CHATS_SCREEN}
                tabBarOptions={{
                    labelStyle: {fontSize: FONT_SIZE_12},
                    style: {backgroundColor: Colors.primary},
                    inactiveTintColor: Colors.primaryText,
                    activeTintColor: '#18ffea',
                    indicatorStyle: {backgroundColor: '#00b19b'},
                    showIcon: true,
                }}>
                <Tab.Screen name={Routes.CAMERA_SCREEN} component={Camera} options={{
                    tabBarLabel: () => null,
                    tabBarIcon: ({color, focused, size}: Props) => {
                        return <IonIcon name={'camera'} size={FONT_SIZE_20} color={color}/>;
                    },
                }}/>
                <Tab.Screen name={Routes.CHATS_SCREEN} component={Chats} options={{title: 'Chats'}}/>
                <Tab.Screen name={Routes.STATUS_SCREEN} component={Status} options={{title: 'Status'}}/>
                <Tab.Screen name={Routes.CALLS_SCREEN} component={Calls} options={{title: 'Calls'}}/>
            </Tab.Navigator>
        </>
    );
}


export default App;
