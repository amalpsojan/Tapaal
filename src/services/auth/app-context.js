import * as React from 'react';
import {useCallback, useContext} from 'react';

import {APP_STATE} from '@constants/';
import {useStoreActions, useStoreState} from 'easy-peasy';
import {Alert} from 'react-native';
import {resetLoginCredentials} from '@services/key-chain';

const AppStateContext = React.createContext();

export const useAppContext = () => {
  return useContext(AppStateContext);
};

export const AppContextProvider = (props) => {
  const {loginUser, setState, checkLogin} = useStoreActions((actions) => ({
    loginUser: actions.login.loginUser,
    setState: actions.login.changeAppState,
    checkLogin: actions.login.checkLogin,
  }));

  const appState = useStoreState((store) => store.login.appstate);

  React.useEffect(() => {
    checkLogin();
  }, []);

  const _logoutUser = useCallback(async () => {
    const reset = resetLoginCredentials();
    if (reset) {
      // do logout
      setState(APP_STATE.GUEST);
    }
  }, [setState]);

  const logout = useCallback(() => {
    Alert.alert(
      'Please comfirm Logout',
      'Are you sure you want to logout from the app',
      [
        {
          text: 'Yes, Logout',
          onPress: _logoutUser,
        },
        {
          type: 'cancel',
          text: 'No, Stay here',
        },
      ],
    );
  }, [_logoutUser]);

  const login = useCallback(
    (reqData) => {
      loginUser(reqData);
    },
    [loginUser],
  );

  return (
    <AppStateContext.Provider value={{appState, login, logout}}>
      {props.children}
    </AppStateContext.Provider>
  );
};

export default AppStateContext;
