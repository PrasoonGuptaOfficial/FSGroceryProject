import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import OnboardingScreen from '../../../Pages/OnBoardingFlow/OnboardingScreen';
import {OnboardingPageOption} from './OnboardingOption';

const MyStack = createStackNavigator();

function OnboardingStack(): React.JSX.Element {
  return (
    <MyStack.Navigator>
      <MyStack.Screen
        name="OnboardingPage"
        component={OnboardingScreen}
        options={OnboardingPageOption}
      />
    </MyStack.Navigator>
  );
}

export default OnboardingStack;
