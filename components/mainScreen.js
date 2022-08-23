import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//import Home from '../screens/home';
//import About from '../screens/about';
import HomeStack from '../routes/homeStack';
import AboutStack from '../routes/aboutStack';

const Tab = createBottomTabNavigator();

export default function MainScreen() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeStack} />
            <Tab.Screen name="About" component={AboutStack} />
        </Tab.Navigator>
    )
}