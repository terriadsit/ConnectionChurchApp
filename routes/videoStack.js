import React from 'react';
import { Image } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import VideoScreen from '../screens/videoScreen';

const Stack = createNativeStackNavigator();

export default function VideoStack() {
  return(
    <Stack.Navigator
      screenOptions={{
      headerStyle: {
        backgroundColor: '#e6e6ff',
        height: 20
      },
      headerTintColor: 'black',
      headerTitleStyle: {
        fontFamily: 'NotoSerif-Bold',
      }
    }}
    >
      <Stack.Screen 
        name="Video Screen" 
        component={VideoScreen}
        options={{ headerShown: false }} 
      />
      
    </Stack.Navigator>
  )
}