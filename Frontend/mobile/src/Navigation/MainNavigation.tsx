import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import DemoStack from './Demo/DemoStack';

const MyStack = createStackNavigator();

function MainNavigation(): JSX.Element {
  return (
    <MyStack.Navigator>
      <MyStack.Screen name="DemoCheck" component={DemoStack} />
    </MyStack.Navigator>
  );
}

export default MainNavigation;
