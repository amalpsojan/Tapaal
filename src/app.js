import React from 'react';

import RootNavigation from '_navigations/app-navigator';

//return root component
const Root = () => {
  return <ThemeConsumer />;
};

const ThemeConsumer = () => {
  return <RootNavigation />;
};

export default Root;
