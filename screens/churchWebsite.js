import React from "react";
import { View, Text, StyleSheet } from "react-native";
import * as WebBrowser from 'expo-web-browser';
import { globalStyles } from "../styles/global";

import ImageWithButton from '../components/imageWithButton';

export default function ChurchWebsite() {
  const pallets = require('../assets/pallets.png');

  const handlePress = () => {
    WebBrowser.openBrowserAsync('https://www.myconnection.church/');
  }

  return (
    <View style={globalStyles.container}>
       <ImageWithButton handlePress={handlePress} title='Go to Full Website' image={pallets} />
    </View>
  );
}

const styles = StyleSheet.create({
    buttonContainer: {
        marginTop: 20
    }
})


