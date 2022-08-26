import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import TheBible from '../screens/theBible';

const Stack = createNativeStackNavigator();

export default function TheBibleStack() {
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
        name="Bible" 
        component={TheBible} 
        options={{ headerShown: false }}
     />
    </Stack.Navigator>
  )
}