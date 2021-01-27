import React from 'react';
import {StoreProvider} from 'easy-peasy';

import {AppContextProvider} from '@services/auth/app-context';
import createStore from '@store/';
import RootNavigation from '@navigations/app-navigator';

const store = createStore();

//return root component
const Root = () => {
  return (
    <StoreProvider store={store}>
      <ThemeConsumer />
    </StoreProvider>
  );
};

const ThemeConsumer = () => {
  return (
    <AppContextProvider>
      <RootNavigation />
    </AppContextProvider>
  );
};

export default Root;
