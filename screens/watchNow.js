import React, { useState, useCallback, useRef } from "react";
import { AppState, View, Alert, Text, StyleSheet } from "react-native";
import * as Linking from 'expo-linking';
import * as WebBrowser from 'expo-web-browser';
import YoutubePlayer from "react-native-youtube-iframe";
import { WebView } from 'react-native-webview';
import { useFocusEffect } from '@react-navigation/native';


import FlatButton from "../shared/button";
import Card from "../shared/card";
import { globalStyles } from "../styles/global";

export default function WatchNow() {
  const [playing, setPlaying] = useState(true)

  useFocusEffect(
    React.useCallback(() => {
      setPlaying(true)
      const unsubscribe =  WebBrowser.openBrowserAsync('https://cache.stl.churchcasting.io/AvwBFOH9ME7MbtQ9CmWxB3wG19H9Alns/channels/1/embeds/players/baBgkR93wCi04Qot/render');
      
      return () => setPlaying(false);
    }, [])
  );

  const handlePress = () => {
    setPlaying(true)
    WebBrowser.openBrowserAsync('https://cache.stl.churchcasting.io/AvwBFOH9ME7MbtQ9CmWxB3wG19H9Alns/channels/1/embeds/players/baBgkR93wCi04Qot/render');
  }

 return (
    <View style={globalStyles.container}>
      
        <Card>
          <Text style={globalStyles.titleText}>Recent Videos</Text>
          <View style={styles.buttonContainer}>
            <FlatButton 
              text='Play' 
              onPress={handlePress}>
            </FlatButton>
          </View>
        </Card>
    </View>
  );
}

const styles = StyleSheet.create({
    buttonContainer: {
      //flex: 1,
      paddingTop: 10,
      //alignItems: 'end'
      // alignSelf: 'flex-end'
    },
    iframeContainer: {
      position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%'
    }
})


