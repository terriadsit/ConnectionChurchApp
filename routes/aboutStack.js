import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import About from '../screens/about';
import globalStyles from '../styles/global';
import Header from '../shared/header';

const Stack = createNativeStackNavigator();

export default function AboutStack() {
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
        name="AboutScreen" 
        component={About} 
        options={{ headerShown: false }}
     />
    </Stack.Navigator>
  )
}