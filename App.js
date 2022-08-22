
import * as React from 'react';

import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View, Button } from 'react-native';

import MyDrawer from './components/myDrawer';
import HomeStack from './routes/homeStack';

export default function App() {

  const [fontsLoaded] = useFonts({
    'NotoSerif-Bold': require('./assets/fonts/NotoSerif-Bold.ttf'),
    'NotoSerif': require('./assets/fonts/NotoSerif-Regular.ttf'),
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



