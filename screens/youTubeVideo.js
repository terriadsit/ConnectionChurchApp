import React, { useState, useCallback, useRef } from "react";
import { Text,  View, Alert, StyleSheet } from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";

import FlatButton from "../shared/button";
import { globalStyles } from "../styles/global";

export default function YouTubeVideo() {

  const [playing, setPlaying] = useState(false);
  
  const onStateChange = useCallback((state) => {
        switch(state) {
        case 'ended':
          setPlaying(false);
          Alert.alert("video has finished playing!");
          break;
        case 'paused':
          setPlaying(false);
          break;
        case 'playing':
            setPlaying(true);
            break;
        default:
      }
  }, []);

  const togglePlaying = useCallback(() => {
    setPlaying((prev) => !prev);
  }, []);

  
  return (
    <View style={styles.videoContainer}>
      <YoutubePlayer
        height={200}
        play={playing}
        playList={'PLvHlffHIKam073QJY3_6sIYmTVAeiPErt'}
        onChangeState={onStateChange}
      />
      <View style={styles.textContainer}>
        <Text style={[styles.directionText, globalStyles.text]}>Use the YouTube menu above (3 horizontal lines) to choose a video.</Text>
      </View>
      <View style={styles.buttonContainer}>
        <FlatButton text={playing ? "pause" : "play"} onPress={togglePlaying} />
      </View>
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
    paddingTop: 10,
    paddingBottom: 10,
  },
  directionText: {
    
  },
  buttonContainer: {
    paddingBottom: 20
  }
})

