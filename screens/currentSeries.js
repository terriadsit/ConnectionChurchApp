import React, { useState, useCallback, useRef } from "react";
import { AppState, View, Alert } from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";

import FlatButton from "../shared/button";

export default function CurrentSeries() {

  const [playing, setPlaying] = useState(false);

  const onStateChange = useCallback((state) => {
    if (state === "ended") {
      setPlaying(false);
      Alert.alert("video has finished playing!");
    }
  }, []);

  const togglePlaying = useCallback(() => {
    setPlaying((prev) => !prev);
  }, []);

  
  return (
    <View>
      <YoutubePlayer
        height={300}
        play={playing}
        playList={'PLvHlffHIKam073QJY3_6sIYmTVAeiPErt'}
        onChangeState={onStateChange}
      />
      <FlatButton text={playing ? "pause" : "play"} onPress={togglePlaying} />
    </View>
  );
}

