import React, { useState, useCallback, useRef } from "react";
import { AppState, View, Alert, Text, StyleSheet } from "react-native";
import * as Linking from 'expo-linking';
import * as WebBrowser from 'expo-web-browser';
import YoutubePlayer from "react-native-youtube-iframe";

import FlatButton from "../shared/button";
import Card from "../shared/card";

export default function WatchNow() {

  const handlePress = () => {
    WebBrowser.openBrowserAsync('https://www.myconnection.church/watch');
  }


  return (
    <View style={styles.thisView}>
        <Card>
          <Text style={styles.thisText}>This screen is under construction. Please visit our website to watch live.</Text>
          <FlatButton 
            text='Visit Website' 
            onPress={handlePress}>
          </FlatButton>
        </Card>
    </View>
  );
}

const styles = StyleSheet.create({
    thisText: {
        marginBottom: 10
    },
    thisView: {
        marginTop: 20
    }
})


