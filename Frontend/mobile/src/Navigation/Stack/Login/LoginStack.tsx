import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {LoginPageOption} from './LoginOptions';
import LoginMainPage from '../../../Pages/LoginFlow/LoginMainPage/LoginMainPage';

const MyStack = createStackNavigator();

function LoginStack(): React.JSX.Element {
  return (
    <MyStack.Navigator>
      <MyStack.Screen
        name="LoginMainPage"
        component={LoginMainPage}
        options={LoginPageOption}
      />
    </MyStack.Navigator>
  );
}

export default LoginStack;
