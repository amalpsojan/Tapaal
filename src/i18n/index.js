import React, {useContext} from 'react';
import LocaleContext from '@i18n/locale-context';

const useTranslation = (props) => {
  return useContext(LocaleContext);
};

export default useTranslation;
