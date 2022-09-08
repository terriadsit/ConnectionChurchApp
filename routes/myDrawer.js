import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
  } from '@react-navigation/drawer';

import Header from '../shared/header';
import AboutStack from './aboutStack';
import HomeStack from './homeStack';
import VideoTabs from './videoTabs';
import TheBibleStack from './theBibleStack';
import ChurchWebsiteStack from './churchWebsiteStack';
import NextStepsStack from './nextStepsStack';

function CustomDrawerContent(props) {
    return (
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        <DrawerItem
          label="Close drawer"
          onPress={() => props.navigation.closeDrawer()}
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
            backgroundColor: '#BDBBC7'
            //backgroundColor: '#FFEAB8'
            //backgroundColor: '#7B7B7B'
          },
          //headerTintColor: 'white',
          headerTintColor: '#151515',
          headerTitleStyle: {
            fontFamily: 'Gothic-Bold',
          }
        }}
       
        Navigator initialRouteName="Home"
        useLegacyImplementation
        drawerContent={(props) => <CustomDrawerContent {...props} />}
      >
        <Drawer.Screen 
          name="Home" 
          component={HomeStack} 
          options={{ headerTitle: (props) => <Header title='CONNECTION CHURCH  ' /> }} 
         />
         <Drawer.Screen 
          name="Bible" 
          component={TheBibleStack} 
          options={{ headerTitle: (props) => <Header title='The Bible:'/> }}
        />
        <Drawer.Screen 
          name="About" 
          component={AboutStack} 
          options={{ headerTitle: (props) => <Header title='About Us:'/> }}
        />
        <Drawer.Screen 
          name="Watch Sermons" 
          component={VideoTabs} 
          options={{ headerTitle: (props) => <Header title='Watch Sermons:' /> }} 
         />
         <Drawer.Screen 
          name="Next Steps" 
          component={NextStepsStack} 
          options={{ headerTitle: (props) => <Header title='Next Steps'/> }}
        />
         <Drawer.Screen 
          name="Full Website" 
          component={ChurchWebsiteStack} 
          options={{ headerTitle: (props) => <Header title='Connection Website'/> }}
        />
     </Drawer.Navigator>
    );
  }
  

