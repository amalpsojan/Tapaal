import {useContext} from 'react';
import AppStateContext from './app-context';

const useAuth = (props) => {
  return useContext(AppStateContext);
};

export default useAuth;
