import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import MainNavigation from './Navigation/MainNavigation';
import {ThemeProvider} from './Context/Theme/ThemeProvider';

function MainApp(): JSX.Element {
  return (
    <NavigationContainer>
      <ThemeProvider>
        <MainNavigation />
      </ThemeProvider>
    </NavigationContainer>
  );
}

export default MainApp;
