import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import TheBible from '../screens/theBible';
import ImageHeader from '../shared/imageHeader';

const Stack = createNativeStackNavigator();

export default function TheBibleStack() {
  return(
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#BDBBC7',
          height: 60,
          paddingTop: 0,
          marginTop: 0,
        },
        headerTintColor: 'black',
        headerTitleStyle: {
          fontFamily: 'Gothic-Bold',
        }
      }}
     >
      <Stack.Screen 
        name="BibleScreen" 
        component={TheBible} 
        options={{ headerShown: false }}  />
    </Stack.Navigator>
  )
}