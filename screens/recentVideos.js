import React, { useState, useCallback, useRef } from "react";
import { AppState, View, Alert } from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";

import FlatButton from "../shared/button";

export default function RecentVideos() {

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

  // place newest video id in position 0
  const playList=['AA_5m20moro', '9AsvV1y0M-8'];
  console.log('appstate',AppState.currentState);

  return (
    <View>
      <YoutubePlayer
        height={300}
        play={playing}
        playList={[...playList]}
        playListStartIndex='0'
        onChangeState={onStateChange}
      />
      <FlatButton text={playing ? "pause" : "play"} onPress={togglePlaying} />
    </View>
  );
}

