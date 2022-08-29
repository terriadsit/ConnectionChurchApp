import React from "react";
import { View, Text, StyleSheet } from "react-native";
import * as WebBrowser from 'expo-web-browser';

import FlatButton from "../shared/button";
import Card from "../shared/card";

export default function ChurchWebsite() {

  const handlePress = () => {
    WebBrowser.openBrowserAsync('https://www.myconnection.church/');
  }


  return (
    <View style={styles.thisView}>
        <Card>
          <Text style={styles.thisText}>Visit our full website, MyConnection.Church</Text>
          <FlatButton 
            text='Go Now' 
            onPress={handlePress}>
          </FlatButton>
        </Card>
    </View>
  );
}

const styles = StyleSheet.create({
    thisText: {
        marginBottom: 10
    },
    thisView: {
        marginTop: 20
    }
})


