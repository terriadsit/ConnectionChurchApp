import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ChurchWebsite from '../screens/churchWebsite';
import globalStyles from '../styles/global';
import Header from '../shared/header';

const Stack = createNativeStackNavigator();

export default function ChurchWebsiteStack() {
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
        name="ChurchWebsite" 
        component={ChurchWebsite} 
        options={{ headerShown: true }}
     />
    </Stack.Navigator>
  )
}