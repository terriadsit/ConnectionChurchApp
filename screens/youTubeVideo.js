import React, { useState, useCallback, useRef } from "react";
import { Text,  View, Alert, StyleSheet } from "react-native";
import * as WebBrowser from 'expo-web-browser';

import FlatButton from "../shared/button";
import Card from "../shared/card";
import { globalStyles } from "../styles/global";

export default function YouTubeVideo() {

  const handlePress = () => {
    WebBrowser.openBrowserAsync('https://www.youtube.com/c/MyconnectionChurch/videos');
  }
  return (
    <View style={globalStyles.container}>
      <Card>
        <View style={styles.textContainer}>
          <Text style={globalStyles.text}>Watch Connection Church sermons on YouTube.</Text>
        </View>
        <View style={styles.buttonContainer}>
          <FlatButton 
            text='Watch Now' 
            onPress={handlePress}>
          </FlatButton>
        </View>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  videoContainer: {
    flex: 1,
    width: '100%',
    height: '100%', // this view should take up 100% of component given to us
    flexDirection: 'column', // main axis
    justifyContent: 'space-between',
    //alignItems: 'center',  // cross axis ie center vertically
    paddingBottom: 5,
  },
  textContainer: {
    paddingLeft: 20,
    paddingTop: 20,
    paddingBottom: 10,
  },
  directionText: {
    
  },
  buttonContainer: {
    paddingBottom: 20,
    paddingTop: 10
  }
})

