import {Platform} from 'react-native';

export const isIos = Platform.OS === 'ios';
export const isAndroid = !isIos;

export const APP_STATE = {
  GUEST: 'GUEST',
  USER: 'USER',
  AUTH: 'CHECKING_LOGIN',
  UNKNOWN: 'UNKNOWN',
};

export const STATUS = {
  SUCCESS: 'SUCCESS',
  NOT_STARTED: 'NOT_STARTED',
  FETCHING: 'FETCHING',
  FAILED: 'FAILED',
};

export const LOCALES = {
  ENGLISH: {id: 1, name: 'en', label: 'ENGLISH'},
  HINDI: {id: 2, name: 'hi', label: 'हिंदी'},
};
