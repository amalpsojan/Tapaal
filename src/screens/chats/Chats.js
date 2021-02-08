import React, {Component} from 'react';
import {Button, SafeAreaView, View} from 'react-native';
import NavigationService from '@navigations/index';
import Routes from '@navigations/routes';

class ChatsScreen extends Component {

    constructor(props) {
        super(props);
    }

    chat = () => {
        NavigationService.navigate(Routes.CHAT_SCREEN);
    };

    render() {
        return (
            <SafeAreaView>
                <View>
                    <Button title="Chat" onPress={this.chat} />
                    {/*<TapaalImage/>*/}
                </View>
            </SafeAreaView>
        );
    }
}

export {ChatsScreen};
