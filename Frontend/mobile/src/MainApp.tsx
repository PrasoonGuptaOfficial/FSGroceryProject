import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import MainNavigation from './Navigation/MainNavigation';

function MainApp(): JSX.Element {
  return (
    <NavigationContainer>
      <MainNavigation />
    </NavigationContainer>
  );
}

export default MainApp;
