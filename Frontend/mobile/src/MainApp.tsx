import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import MainNavigation from './Navigation/Common/MainNavigation';
import CommonContext from './Context/Common/CommonContext.index';
import {StatusBarComp} from './Components/Common/commonComps.index';

function MainApp(): React.JSX.Element {
  return (
    <NavigationContainer>
      <CommonContext>
        <StatusBarComp />
        <MainNavigation />
      </CommonContext>
    </NavigationContainer>
  );
}

export default MainApp;
