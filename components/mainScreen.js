import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//import Home from '../screens/home';
//import About from '../screens/about';
import HomeStack from '../routes/homeStack';
import AboutStack from '../routes/aboutStack';
import MyDrawer from './myDrawer';

const Tab = createBottomTabNavigator();

export default function MainScreen() {
    return (
        <Tab.Navigator
            screenOptions={{
            headerStyle: {
              backgroundColor: 'yellow'
            },
            headerTintColor: 'black',
            headerTitleStyle: {
              fontFamily: 'Gothic-Bold',
            }
          }}>
            <Tab.Screen name="HomeTab" component={HomeStack} />
            <Tab.Screen name="AboutTab" component={AboutStack} />
        </Tab.Navigator>
    )
}