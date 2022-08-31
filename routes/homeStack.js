import React from 'react';
import { Image } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../screens/home';
import ReviewDetails from '../screens/reviewDetails';
import Header from '../shared/header';

const Stack = createNativeStackNavigator();



export default function HomeStack() {
  return(
    <Stack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#BDBBC7',
        
      },
      headerTintColor: 'black',
      headerTitleStyle: {
        fontFamily: 'Gothic-Bold',
      }
    }}
    >
      <Stack.Screen 
        name="Welcome!" 
        component={Home}
        options={{ headerShown: false }} 
      />
      
    </Stack.Navigator>
  )
}