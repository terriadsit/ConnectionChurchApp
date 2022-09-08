import React from "react";
import {   View, StyleSheet } from "react-native";

import { globalStyles } from "../styles/global";
import VideoComponent from "../components/videoComponent";

export default function RecentVideos() {
  const link = 'https://www.youtube.com/c/MyconnectionChurch/videos';
  const text =  'Watch on YouTube'
  
 return (
    <View style={globalStyles.container}>
      <VideoComponent text={text} link={link}/>
    </View>
  );
}

const styles = StyleSheet.create({
    
})


