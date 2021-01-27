import {action, thunk} from 'easy-peasy';

import {setLoginCredentials, getLoginCredentials} from '@services/key-chain';
import {STATUS, APP_STATE} from '@constants/';
import BaseModel from './base';

const checkLogin = thunk(async (actions, payload, {dispatch, injections}) => {
  const {api} = injections;

  const credentials = await getLoginCredentials();
  if (credentials) {
    // api.setAuthorizationHeader(credentials.access_token);
    //dispatch.user.requestUserProfile();
    // console.warn('cred', credentials);
    actions.changeAppState(APP_STATE.USER);
    actions.mergeState(credentials);
  } else {
    actions.changeAppState(APP_STATE.GUEST);
  }
});

const loginUser = thunk(async (actions, payload, {dispatch}) => {
  if (!payload.username || !payload.password) {
    return;
  }
  actions.updateStatus(STATUS.FETCHING);
  // let response = await ApiService.loginUser(payload);

  let response = await setLoginCredentials(payload.username, payload.password);

  //mocking api
  setTimeout(() => {
    actions.updateStatus(response.status ? STATUS.SUCCESS : STATUS.FAILED);
    if (!response.status) {
      console.warn(response.error);
    } else {
      actions.changeAppState(APP_STATE.USER);
    }
  }, 1000);

  // 	ApiService.setAuthorizationHeader(response.data.access_token);
  // 	dispatch.user.requestUserProfile();
});

const LoginModel = {
  //include BaseModel
  ...BaseModel(),
  //include all thunks or actions defined separately
  loginUser,
  checkLogin,
  appstate: APP_STATE.UNKNOWN,
  changeAppState: action((state, payload) => {
    state.appstate = payload;
  }),
};

export default LoginModel;
