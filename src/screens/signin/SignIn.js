import React from 'react';
import {Button, Keyboard, SafeAreaView, TextInput, View} from 'react-native';
import useAuth from '@services/auth';
import NavigationService from '@navigations/index';
import Routes from '@navigations/routes';

const SignInScreen = () => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const {login} = useAuth();

  const loginUser = () => {
    Keyboard.dismiss();

    if (!username || !password) {
      // showInfoToast('Username and password are mandatory, try again !');
    }

    login({
      username,
      password,
    });
  };

  const onSignUp = () => {
    NavigationService.navigate(Routes.SIGNUP_SCREEN);
  };

  return (
    <SafeAreaView>
      <View>
        <TextInput
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <Button
          title="Sign in"
          // onPress={() => authContext.signIn({username, password})}
          onPress={loginUser}
        />
        <Button
          title="Sign Up"
          // onPress={() => authContext.signIn({username, password})}
          onPress={onSignUp}
        />
      </View>
    </SafeAreaView>
  );
};

export {SignInScreen};
