import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import DemoPage from '../../Pages/Demo/DemoPage';

const MyStack = createStackNavigator();

function DemoStack(): JSX.Element {
  return (
    <MyStack.Navigator>
      <MyStack.Screen name="Demo" component={DemoPage} />
    </MyStack.Navigator>
  );
}

export default DemoStack;
