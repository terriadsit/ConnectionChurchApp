import React from "react";
import { View, Text, StyleSheet } from "react-native";
import * as WebBrowser from 'expo-web-browser';

import FlatButton from "../shared/button";
import Card from "../shared/card";
import { globalStyles } from "../styles/global";

export default function ChurchWebsite() {

  const handlePress = () => {
    WebBrowser.openBrowserAsync('https://www.myconnection.church/');
  }


  return (
    <View style={globalStyles.container}>
        <Card>
          <Text style={globalStyles.text}>Visit our full website, MyConnection.Church</Text>
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
        marginTop: 20
    }
})


