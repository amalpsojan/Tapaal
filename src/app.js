import React from 'react';
import RootNavigation from '@navigations/app-navigator';

import {StoreProvider} from 'easy-peasy';

import {AppContextProvider} from '@services/auth/app-context';
import createStore from '@store/';
import {LocaleContextProvider} from '@i18n/locale-context';

const store = createStore();

//return root component
const Root = () => {
    return (
        <LocaleContextProvider>
            <StoreProvider store={store}>
                <ThemeConsumer/>
            </StoreProvider>
        </LocaleContextProvider>
    );
};

const ThemeConsumer = () => {
    return (
        <AppContextProvider>
            <RootNavigation/>
        </AppContextProvider>
    );
};

// const Root = () =>{
//     return <RootNavigation />
// }

export default Root;
