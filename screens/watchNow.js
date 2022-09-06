import React from "react";
import {   View, StyleSheet } from "react-native";

import { globalStyles } from "../styles/global";
import VideoComponent from "../components/videoComponent";

export default function WatchNow() {
  const link = 'https://cache.stl.churchcasting.io/AvwBFOH9ME7MbtQ9CmWxB3wG19H9Alns/channels/1/embeds/players/baBgkR93wCi04Qot/render';
  const text =  'Sermons are streamed live Sundays at 10 AM.'
  
 return (
    <View style={globalStyles.container}>
      <VideoComponent text={text} link={link}/>
    </View>
  );
}

const styles = StyleSheet.create({
    
})


