import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../screens/home';
import About from '../screens/about';

const Tab = createBottomTabNavigator();

export default function MainScreen() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={Home} />
            {/* <Tab.Screen name="About" component={About} /> */}
        </Tab.Navigator>
    )
}