import React, { useState } from "react";
import {  View, Text, StyleSheet } from "react-native";
import * as WebBrowser from 'expo-web-browser';
import { useFocusEffect } from '@react-navigation/native';


import FlatButton from "../shared/button";
import Card from "../shared/card";
import { globalStyles } from "../styles/global";

export default function VideoComponent({...props}) {
  const text = props.text;
  const link = props.link;
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
    <View>
      
        <Card>
          <Text style={globalStyles.titleText}>{text}</Text>
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


