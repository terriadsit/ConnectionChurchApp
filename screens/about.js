import React from 'react';
import { 
    TouchableOpacity,
    StyleSheet,
    View,
    Text,
    ScrollView
} from 'react-native';
import * as WebBrowser from 'expo-web-browser';


import { globalStyles } from '../styles/global';
import Card from '../shared/card';
import ImageWithButton from '../components/imageWithButton';

export default function About({ navigation }) {
  const staffImage = require('../assets/staff.jpg');
  const pallets = require('../assets/pallets.png')
  const map = require('../assets/map.jpg')

  const visitMaps = () => {
    WebBrowser.openBrowserAsync('https://www.google.com/maps/place/1455+N+Rapids+Rd,+Manitowoc,+WI+54220/@44.1163454,-87.7056328,17z/data=!3m1!4b1!4m5!3m4!1s0x880339d15cb3c663:0x6b11e2b85fdeef56!8m2!3d44.1163416!4d-87.7034441');
  }

    return (
      <ScrollView style={globalStyles.container}>
        <View style={styles.imagesContainer}>
          <ImageWithButton handlePress={() => navigation.navigate('Core Values')} title='Core Values' image={pallets} />
          <ImageWithButton handlePress={() => navigation.navigate('Staff')} title='Staff' image={staffImage} />
          <ImageWithButton handlePress={visitMaps} title='Directions' image={map} />
        </View>
      </ScrollView>
    )
}

const styles = StyleSheet.create({
  imagesContainer: {
    paddingBottom: 60,
  }
})