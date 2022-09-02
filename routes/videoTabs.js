import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import RecentVideos from '../screens/recentVideos';
import WatchNow from '../screens/watchNow';
import CurrentSeries from '../screens/currentSeries';
import VideoTabBar from '../components/videoTabBar';

const Tab = createBottomTabNavigator();

export default function VideoTabs() {
  return(
   <Tab.Navigator tabBar={props => <VideoTabBar {...props} />}
       screenOptions={{
        headerStyle: {
          backgroundColor: '#BDBBC7'
        
        },
        headerTintColor: '#151515',
        headerTitleStyle: {
          fontFamily: 'Gothic-Bold',
        }
     }}
    >
      <Tab.Screen 
        name="Recent Videos" 
        component={RecentVideos}
        options={{ headerShown: true }} 
      />

      <Tab.Screen 
        name="Watch Now" 
        component={WatchNow}
        options={{ headerShown: true }} 
      />

      <Tab.Screen 
        name="Current Series" 
        component={CurrentSeries}
        options={{ headerShown: true }} 
      />
      
    </Tab.Navigator>
  )
}