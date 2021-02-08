import React from 'react';
import {Header} from '@components/header/Header';
import Colors from '@styles/colors';
import {FONT_SIZE_12, FONT_SIZE_20} from '@styles/typography';
import Routes from '@navigations/routes';
import {Calls, Camera, Chats, Status} from '@screens/index';
import IonIcon from 'react-native-vector-icons/Ionicons';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import useTranslation from '@i18n/';

const Tab = createMaterialTopTabNavigator();
const appName = 'Tapaal';

const TabStack = () => {
    const {t} = useTranslation();

    return (
        <>
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
                <Tab.Screen name={Routes.CHATS_SCREEN} component={Chats} options={{title: t('chats')}}/>
                <Tab.Screen name={Routes.STATUS_SCREEN} component={Status} options={{title: t('status')}}/>
                <Tab.Screen name={Routes.CALLS_SCREEN} component={Calls} options={{title: t('calls')}}/>
            </Tab.Navigator>
        </>
    );
};

const Stack = createStackNavigator();

export default () => {
    return (
        <Stack.Navigator headerMode="none">
            <Stack.Screen name={Routes.TAB_STACK} component={TabStack}/>
        </Stack.Navigator>
    );
};
