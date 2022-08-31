import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import TheBible from '../screens/theBible';

const Stack = createNativeStackNavigator();

export default function TheBibleStack() {
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
        name="Bible" 
        component={TheBible} 
        options={{ headerShown: true }}
     />
    </Stack.Navigator>
  )
}