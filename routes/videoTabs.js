import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import RecentVideos from '../screens/recentVideos';
import WatchNow from '../screens/watchNow';
import VideoTabBar from '../components/videoTabBar';
import YouTubeVideo from '../screens/youTubeVideo';

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
      Navigator initialRouteName="On YouTube"
    >
      <Tab.Screen 
        name="Recent" 
        component={RecentVideos}
        options={{ headerShown: true }} 
      />

      <Tab.Screen 
        name="Live" 
        component={WatchNow}
        options={{ headerShown: true }} 
      />

      <Tab.Screen 
        name="On YouTube" 
        component={YouTubeVideo}
        options={{ headerShown: true }} 
      />
      
    </Tab.Navigator>
  )
}