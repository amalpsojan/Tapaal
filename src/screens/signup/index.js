import React from 'react';
import {SafeAreaView, Text, TouchableHighlight} from 'react-native';
import NavigationService from '@navigations/index';
import Routes from '@navigations/routes';

const LoginScreen = () => {
  const onSignIn = () => {
    NavigationService.navigate(Routes.SIGNIN_SCREEN);
  };

  return (
    <SafeAreaView>
      <Text>Screen: SignUp</Text>

      <TouchableHighlight onPress={onSignIn}>
        <Text>Go to SignIn</Text>
      </TouchableHighlight>
    </SafeAreaView>
  );
};

export default LoginScreen;
