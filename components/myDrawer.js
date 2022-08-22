import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
  } from '@react-navigation/drawer';

import Home from "../screens/home";
import About from "../screens/about";
import ReviewDetails from '../screens/reviewDetails';
import HomeStack from '../routes/homeStack';

function CustomDrawerContent(props) {
    return (
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        <DrawerItem
          label="Close drawer"
          onPress={() => props.navigation.closeDrawer()}
        />
        <DrawerItem
          label="Toggle drawer"
          onPress={() => props.navigation.toggleDrawer()}
        />
      </DrawerContentScrollView>
    );
   }
  
  const Drawer = createDrawerNavigator();
  const Stack = createNativeStackNavigator();
  
  export default function MyDrawer() {
    return (
      <Drawer.Navigator
        useLegacyImplementation
        drawerContent={(props) => <CustomDrawerContent {...props} />}
      >
        <Drawer.Screen name="Home" component={HomeStack} />
        <Drawer.Screen name="About" component={About} />
        {/* <Stack.Screen name="Home" component={Home} /> */}
        {/* <Stack.Screen name="ReviewDetails" component={ReviewDetails} /> */}
      </Drawer.Navigator>
    );
  }
  

