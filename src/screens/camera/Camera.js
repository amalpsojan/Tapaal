import React, {Component} from 'react';
import {Button, SafeAreaView, Text, View} from 'react-native';
import NavigationService, {isMountedRef} from '@navigations/index';
import Routes from '@navigations/routes';
import {TapaalImage} from '@components/image/TapaalImage';
import {FONT_SIZE_12} from '@styles/typography';
import IonIcon from 'react-native-vector-icons/Ionicons';

class CameraScreen extends Component {

    constructor(props) {
        super(props);
        isMountedRef.current = true;
    }

    chat = () => {
        NavigationService.navigate(Routes.CHAT_SCREEN);
    };

    render() {
        return (
            <SafeAreaView>
                <View>

                </View>
            </SafeAreaView>
        );
    }
}

export {CameraScreen};
