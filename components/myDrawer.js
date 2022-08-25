import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
  } from '@react-navigation/drawer';

import Header from '../shared/header';
import AboutStack from '../routes/aboutStack';
import HomeStack from '../routes/homeStack';
import VideoStack from '../routes/videoStack';

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
        screenOptions={{
          headerStyle: {
            backgroundColor: '#e6e6ff'
          },
          headerTintColor: 'black',
          headerTitleStyle: {
            fontFamily: 'NotoSerif-Bold',
          }
        }}
       
        Navigator initialRouteName="Home"
        useLegacyImplementation
        drawerContent={(props) => <CustomDrawerContent {...props} />}
      >
        <Drawer.Screen 
          name="Home" 
          component={HomeStack} 
          options={{ headerTitle: (props) => <Header title='Books:' /> }} 
         />
        <Drawer.Screen 
          name="About" 
          component={AboutStack} 
          options={{ headerTitle: (props) => <Header title='About Us:'/> }}
        />
        <Drawer.Screen 
          name="Videos" 
          component={VideoStack} 
          options={{ headerTitle: (props) => <Header title='Watch:' /> }} 
         />
     </Drawer.Navigator>
    );
  }
  

