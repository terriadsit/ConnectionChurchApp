import React, { useState, useCallback, useRef } from "react";
import { AppState, View, Alert, Text, StyleSheet } from "react-native";
import * as Linking from 'expo-linking';
import * as WebBrowser from 'expo-web-browser';
import YoutubePlayer from "react-native-youtube-iframe";

import FlatButton from "../shared/button";
import Card from "../shared/card";
import { globalStyles } from "../styles/global";

export default function WatchNow() {

  const handlePress = () => {
    WebBrowser.openBrowserAsync('https://www.myconnection.church/watch');
  }


  return (
    <View style={globalStyles.container}>
        <Card>
          <Text style={globalStyles.text}>This screen is under construction. Please visit our website to watch live.</Text>
          <View style={styles.buttonContainer}>
            <FlatButton 
              text='Visit Website' 
              onPress={handlePress}>
            </FlatButton>
          </View>
        </Card>
    </View>
  );
}

const styles = StyleSheet.create({
    buttonContainer: {
      paddingTop: 10
    }
})


