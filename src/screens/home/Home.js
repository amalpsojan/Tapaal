import React, {Component} from 'react';
import {Button, SafeAreaView, Text, View} from 'react-native';
import NavigationService, {isMountedRef} from '@navigations/index';
import Routes from '@navigations/routes';

class HomeScreen extends Component {

  constructor(props) {
    super(props);
    isMountedRef.current = true;
  }

  componentDidMount() {

  }

  logoutUser = () => {

  };

  chat = () => {
    NavigationService.navigate(Routes.CHAT_SCREEN);
  };

  render() {
    return (
        <SafeAreaView>
          <View>
            <Text>Signed in!</Text>
            <Button title="Chat" onPress={this.chat} />
            <Button title="Sign out" onPress={this.logoutUser} />
          </View>
        </SafeAreaView>
    );
  }
}

export {HomeScreen};
