import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import SplashStack from '../Stack/Splash/SplashStack';
import {MainNavigationOption} from './MainNavigationOption';

const MyStack = createStackNavigator();

function MainNavigation(): JSX.Element {
  return (
    <MyStack.Navigator>
      <MyStack.Screen
        name="Splash"
        component={SplashStack}
        options={MainNavigationOption}
      />
    </MyStack.Navigator>
  );
}

export default MainNavigation;
