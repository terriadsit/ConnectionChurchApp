
import * as React from 'react';

import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View, Button } from 'react-native';

import MyDrawer from './routes/myDrawer';
import HomeStack from './routes/homeStack';
import AboutStack from './routes/aboutStack';

export default function App() {

  const [fontsLoaded] = useFonts({
    'Gothic-Bold': require('./assets/fonts/NanumGothicCoding-Bold.ttf'),
    'Gothic': require('./assets/fonts/NanumGothicCoding-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  } else {
    return (
      <NavigationContainer>
        <MyDrawer />
      </NavigationContainer>
    );
  }
}



