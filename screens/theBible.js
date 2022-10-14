import React from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";
import * as WebBrowser from 'expo-web-browser';

import FlatButton from "../shared/button";
import Card from "../shared/card";
import { globalStyles } from "../styles/global";
import ImageWithButton from "../components/imageWithButton";

export default function TheBible() {
  const theBible = require('../assets/theBible.jpg');
  const title = "BlueLetterBible"

  const handlePress = () => {
    WebBrowser.openBrowserAsync('https://www.blueletterbible.org/niv/jhn/1/1/s_998001');
  }


  return (
    <View style={globalStyles.container}>
      <ImageWithButton handlePress={handlePress} image={theBible} title={title}  />
    </View>
    
    // <ImageBackground source={theBible} style={styles.image}>
      
       
    //     <View style={[globalStyles.imageTextContainer, styles.opaqueBackground]}>
          
    //       <Text style={[globalStyles.imageText]}>Read the Bible online at the BlueLetterBible.org</Text>
    //       <View style={styles.buttonContainer}>
    //         <FlatButton 
    //           text='Read Now' 
    //           onPress={handlePress}>
    //         </FlatButton>
    //       </View>
    //     </View>
        
    //     </ImageBackground>
    
  );
}

const styles = StyleSheet.create({
    image: {
      flex: 1,
      flexDirection: 'column', // main axis
      alignItems: 'center',  // cross axis ie center horizontally
      justifyContent: 'center'
    },
    opaqueBackground: {
      width: 250,
      padding: 60,
      backgroundColor: 'rgba(250,250,250,0.7)'
    },
    buttonContainer: {
      paddingTop: 20
    },
    buttonBackground: {
      padding: 20,


      backgroundColor: 'rgba(255,255,255,0.6)'
    }

    
})


