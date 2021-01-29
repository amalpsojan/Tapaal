import React from 'react';
import {Button, SafeAreaView, Text, View} from 'react-native';
import useAuth from '@services/auth';

const HomeScreen = ({navigation}) => {
  const {logout} = useAuth();

  const logoutUser = () => {
    logout();
  };

  return (
    <SafeAreaView>
      <View>
        <Text>Signed in!</Text>
        <Button title="Sign out" onPress={logoutUser} />
      </View>
    </SafeAreaView>
  );
};

export {HomeScreen};
