import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../screens/home';
import ReviewDetails from '../screens/reviewDetails';

const Stack = createNativeStackNavigator();

export default function HomeStack() {
  return(
    <Stack.Navigator>
      <Stack.Screen name="HomeScreen" component={Home} />
      <Stack.Screen name="ReviewDetails" component={ReviewDetails} />
    </Stack.Navigator>
  )
}