import React from 'react';
import { Image } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../screens/home';
import ReviewDetails from '../screens/reviewDetails';
import Header from '../shared/header';

const Stack = createNativeStackNavigator();

function LogoTitle() {
  return (
    <Image
      style={{ width: 50, height: 50 }}
      source={require('../assets/family-tree.png')}
    />
  );
}

export default function HomeStack() {
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
        name="Home Screen" 
        component={Home}
        options={{ headerShown: true }} 
      />
      <Stack.Screen 
        name="ReviewDetails" 
        component={ReviewDetails} 
        options={({ route }) => ({ title: route.params.item.title })}
      />
    </Stack.Navigator>
  )
}