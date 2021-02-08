import "./i18n";
import React from "react";
import I18n from "i18n-js";

import {LOCALES} from '@constants/';
import useStorage from '@services/async-storage';
import translateOrFallback from '@i18n/translate-fallback';

const LocaleContext = React.createContext();

export const LocaleContextProvider = props => {
	const [locale, changeLocale] = useStorage("@language", LOCALES.ENGLISH);
	I18n.locale = locale.name;

	const _changeLocale = locale => {
		I18n.locale = locale.name;
		changeLocale(locale);
	};

	return (
		<LocaleContext.Provider
			value={{
				...I18n,
				localeProvider: locale,
				t: translateOrFallback,
				changeLocale: _changeLocale
			}}
		>
			{props.children}
		</LocaleContext.Provider>
	);
};

export default LocaleContext;
