import React from "react";
import { Video, AVPlaybackStatus } from 'expo-av';
import YoutubePlayer from 'react-native-youtube-iframe';
import { 
    View, 
    StyleSheet,
    Button,
} from 'react-native';

import FlatButton from '../shared/button';
import { globalStyles } from "../styles/global";

export default function VideoScreen() {
    const video = React.useRef(null);
    const [status, setStatus] = React.useState({});

    return (
        <View >
            <View>
               <YoutubePlayer
                  style={{ alignSelf: 'stretch', height: 300 }}
                  fullscreen
                  height={300}
                  play={status}
                  videoId={'AA_5m20moro'}
                />
            </View>
          {/* <Video 
            style={styles.videoStyle}
            ref={video}
            source={{
              uri: 'https://youtu.be/AA_5m20moro',
            }}
            useNativeControls
            resizeMode="contain"
            isLooping
            
            onPlaybackStatusUpdate={status => setStatus(() => status)}
          >
          </Video> */}
          <View style={styles.buttonContainer}>
            <Button
              
              title={status ? 'Pause' : 'Play'}
              onPress={() => setStatus(!status)}
            />
          </View>
        </View>
    )
}

const styles = StyleSheet.create({
    videoView: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      },
      videoStyle: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        //height: 300
      },
      buttonContainer: {
        marginTop: 360,
      }
})