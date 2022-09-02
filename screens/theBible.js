import React from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";
import * as WebBrowser from 'expo-web-browser';

import FlatButton from "../shared/button";
import Card from "../shared/card";
import { globalStyles } from "../styles/global";

export default function TheBible() {
  
  const handlePress = () => {
    WebBrowser.openBrowserAsync('https://www.blueletterbible.org/niv/jhn/1/1/s_998001');
  }


  return (
    
    <View style={globalStyles.container}>
      
       
        <Card>
          
          <Text style={globalStyles.text}>Read the Bible online, BlueLetterBible.org</Text>
          <View style={styles.buttonContainer}>
            <FlatButton 
              text='Read Now' 
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
    },
    
})


