import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import HomeScreen from '../../../Pages/HomeFlow/HomeScreen';

const MyStack = createStackNavigator();

const HomeStack = (): React.JSX.Element => {
  return (
    <MyStack.Navigator>
      <MyStack.Screen name="HomePage" component={HomeScreen} />
    </MyStack.Navigator>
  );
};

export default HomeStack;
