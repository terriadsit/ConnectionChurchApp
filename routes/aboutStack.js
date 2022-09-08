import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import globalStyles from '../styles/global';
import Header from '../shared/header';
import Visit from '../screens/visit';
import CoreValues from '../screens/coreValues';
import Staff from '../screens/staff';
import About from '../screens/about';

const Stack = createNativeStackNavigator();

export default function AboutStack() {
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
        name="What. Who. Where." 
        component={About} 
        options={{ headerShown: true }}
     />
     <Stack.Screen 
       name="Core Values" 
       component={CoreValues} 
       options={{ headerShown: true }}
     />
     <Stack.Screen 
        name="Staff" 
        component={Staff} 
        options={{ headerShown: true }}
     />
     <Stack.Screen 
        name="Directions" 
        component={Visit} 
        options={{ headerShown: true }}
     />

    </Stack.Navigator>
  )
}