import React, { useState } from "react";
import {  View, Text, StyleSheet, ImageBackground } from "react-native";
import * as WebBrowser from 'expo-web-browser';
import { useFocusEffect } from '@react-navigation/native';


import FlatButton from "../shared/button";
import Card from "../shared/card";
import { globalStyles } from "../styles/global";

export default function VideoComponent({...props}) {
  const text = props.text;
  const link = props.link;
  const pallets = require('../assets/pallets.png')
  const [playing, setPlaying] = useState(true)

  // useFocusEffect(
  //   React.useCallback(() => {
  //     setPlaying(true)
  //     const unsubscribe =  WebBrowser.openBrowserAsync(link);
      
  //     return () => setPlaying(false);
  //   }, [])
  // );

  const handlePress = () => {
    setPlaying(true)
    WebBrowser.openBrowserAsync(link);
  }

 return (
    <View style={[globalStyles.container, styles.thisContainer]}>
      
        <ImageBackground source={pallets} style={styles.image}>
          <View style={[globalStyles.imageTextContainer, styles.thisTextContainer]}>
            <Text style={globalStyles.imageText}>{text}</Text>
          </View>
          <View style={styles.buttonContainer}>
            <FlatButton 
              text='Play' 
              onPress={handlePress}>
            </FlatButton>
          </View>
        </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
    thisContainer: {
      justifyContent: 'center',
      alignItems: 'center'
    },
    thisTextContainer: {
      width: 200,
      padding: 20,
      //paddingTop: 20
    },
    buttonContainer: {
      //flex: 1,
      paddingTop: 20,
      //alignItems: 'end'
      // alignSelf: 'flex-end'
    },
    image: {
      width: 250,
      height: 250,
      justifyContent: 'center',
      alignItems: 'center'
    },
    iframeContainer: {
      position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%'
    }
})


