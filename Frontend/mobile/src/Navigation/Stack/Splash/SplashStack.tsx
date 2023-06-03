import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {SplashScreen} from '../../../Pages/Common/commonPages.index';
import {SplashPageOption} from './SplashOption';

const MyStack = createStackNavigator();

function SplashStack(): JSX.Element {
  return (
    <MyStack.Navigator>
      <MyStack.Screen
        name="SplashPage"
        component={SplashScreen}
        options={SplashPageOption}
      />
    </MyStack.Navigator>
  );
}

export default SplashStack;
