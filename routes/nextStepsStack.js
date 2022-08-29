import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import NextSteps from '../screens/nextSteps';
import globalStyles from '../styles/global';
import Header from '../shared/header';

const Stack = createNativeStackNavigator();

export default function NextStepsStack() {
  return(
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#e6e6ff',
          height: 60
        },
        headerTintColor: 'black',
        headerTitleStyle: {
          fontFamily: 'NotoSerif-Bold',
        }
      }}
    >
      <Stack.Screen 
        name="NextSteps" 
        component={NextSteps} 
        options={{ headerShown: true }}
     />
    </Stack.Navigator>
  )
}