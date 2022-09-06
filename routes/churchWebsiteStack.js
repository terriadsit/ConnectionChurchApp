import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ChurchWebsite from '../screens/churchWebsite';

const Stack = createNativeStackNavigator();

export default function ChurchWebsiteStack() {
  return(
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#BDBBC7',
          height: 30
        },
        headerTintColor: 'black',
        headerTitleStyle: {
          fontFamily: 'Gothic-Bold',
        }
      }}
    >
      <Stack.Screen 
        name="Church Website" 
        component={ChurchWebsite} 
        options={{ headerShown: true }}
     />
    </Stack.Navigator>
  )
}