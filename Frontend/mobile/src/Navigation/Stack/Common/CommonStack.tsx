import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SplashStack from '../Splash/SplashStack';
import {CommonPageOption} from './CommonOption';
import OnboardingStack from '../Onboarding/OnboardingStack';
import LoginStack from '../Login/LoginStack';
import HomeStack from '../Home/HomeStack';

const MyStack = createStackNavigator();

function CommonStack(): React.JSX.Element {
  return (
    <MyStack.Navigator>
      <MyStack.Screen
        name="SplashStack"
        component={SplashStack}
        options={CommonPageOption}
      />
      <MyStack.Screen
        name="OnboardingStack"
        component={OnboardingStack}
        options={CommonPageOption}
      />
      <MyStack.Screen
        name="LoginStack"
        component={LoginStack}
        options={CommonPageOption}
      />
      <MyStack.Screen
        name="HomeStack"
        component={HomeStack}
        options={CommonPageOption}
      />
    </MyStack.Navigator>
  );
}

export default CommonStack;
