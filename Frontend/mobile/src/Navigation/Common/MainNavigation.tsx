import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {MainNavigationOption} from './MainNavigationOption';
import CommonStack from '../Stack/Common/CommonStack';

const MyStack = createStackNavigator();

function MainNavigation(): React.JSX.Element {
  return (
    <MyStack.Navigator>
      <MyStack.Screen
        name="Main"
        component={CommonStack}
        options={MainNavigationOption}
      />
    </MyStack.Navigator>
  );
}

export default MainNavigation;
