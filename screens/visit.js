import React from "react";
import { View, Text, StyleSheet } from "react-native";
import * as WebBrowser from 'expo-web-browser';

import FlatButton from "../shared/button";
import Card from "../shared/card";
import { globalStyles } from "../styles/global";

export default function Visit() {

  const handlePress = () => {
    WebBrowser.openBrowserAsync('https://www.google.com/maps/place/1455+N+Rapids+Rd,+Manitowoc,+WI+54220/@44.1163454,-87.7056328,17z/data=!3m1!4b1!4m5!3m4!1s0x880339d15cb3c663:0x6b11e2b85fdeef56!8m2!3d44.1163416!4d-87.7034441');
  }


  return (
    <View style={globalStyles.container}>
        <Card>
          <Text style={globalStyles.titleText}>Visit Google Maps</Text>
          <View style={styles.buttonContainer}>
            <FlatButton 
              text='Go Now' 
              onPress={handlePress}>
            </FlatButton>
          </View>
        </Card>
    </View>
  );
}

const styles = StyleSheet.create({
    buttonContainer: {
      paddingTop: 20,
    },
    thisView: {
        marginTop: 20
    }
})


