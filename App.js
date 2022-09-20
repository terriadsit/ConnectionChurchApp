
import * as React from 'react';

import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View, Button, Image} from 'react-native';
import * as SplashScreen from 'expo-splash-screen';

import MyDrawer from './routes/myDrawer';
import HomeStack from './routes/homeStack';
import AboutStack from './routes/aboutStack';

// Keep the splash screen visible while we fetch resources
//SplashScreen.preventAutoHideAsync();

export default function App() {
  const logo = require('./assets/splash.png');
  
  const [fontsLoaded] = useFonts({
    'Gothic-Bold': require('./assets/fonts/Oswald-Bold.ttf'),
    'Gothic': require('./assets/fonts/Oswald-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return (
      <View>
        <Image source={logo} style={{ height: 100, width: 100, paddingTop: 100 }}>
        </Image>
      </View>
    )
  } else {
    return (
      <NavigationContainer>
        <MyDrawer />
      </NavigationContainer>
    );
  }
}





