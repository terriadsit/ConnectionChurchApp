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
          backgroundColor: '#BDBBC7',
          height: 60
        },
        headerTintColor: 'black',
        headerTitleStyle: {
          fontFamily: 'Gothic-Bold',
        }
      }}
    >
      <Stack.Screen 
        name="Next Steps:" 
        component={NextSteps} 
        options={{ headerShown: true }}
     />
    </Stack.Navigator>
  )
}