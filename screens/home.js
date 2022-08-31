import React from 'react';
import { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { 
    TouchableWithoutFeedback, // closes keyboard when outside area touched
    Keyboard,
    TouchableOpacity,
    FlatList,
    View,
    Text,
    Modal,
    StyleSheet,
    ImageBackground
} from 'react-native';


import { globalStyles } from '../styles/global';
import Card from '../shared/card';
import ReviewForm from './reviewForm';
import { ScrollView } from 'react-native-gesture-handler';
import { block } from 'react-native-reanimated';


export default function Home({ navigation }) {

  const image1 = require('../assets/asYouAre.jpg');
  const image2 = require('../assets/bringKids.jpg');
  const image3 = require('../assets/serviceStyle.jpg');

  return (
      <ScrollView style={globalStyles.container}>
        <View style={styles.blockHeading}>
          <Text style={globalStyles.titleText}>WHEN & WHERE</Text> 
        </View>
        <View style={styles.block}>
          <View>
            <Text style={styles.blockContent1}>SUNDAYS @ 10 AM</Text>
            <Text style={styles.blockText}>1455 N Rapids Rd</Text>
            <Text style={styles.blockText}>Manitowoc, WI 54220</Text>
            <Text style={styles.blockText}>(920) 684-8845</Text>
            <Text style={styles.blockText}>office@myConnection.church</Text>
         </View>
        </View>
        <View style={styles.block}>
          <View>
            <Text style={styles.blockContent1}>OFFICE HOURS</Text>
            <Text style={styles.blockText}>Tuesday - Thursday</Text>
            <Text style={styles.blockText}>9:30 - 2:30</Text>
            <Text style={styles.blockText}>Or by Appointment</Text>
            <Text style={styles.blockText}>Summer hours may vary</Text>
         </View>
        </View>
        <View style={styles.imageContainer}>
          <ImageBackground source={image1} resizeMode="cover" style={styles.image}>
            <Text style={styles.imageTextTitle}>COME AS YOU ARE</Text>
            <View>
              <Text style={styles.imageText}>No dresscode. No labels. No judgement. Come as you are.</Text>
            </View>
          </ImageBackground>
        </View>
        <View style={styles.imageContainer}>
          <ImageBackground source={image2} resizeMode="cover" style={styles.image}>
            <Text style={styles.imageTextTitle}>BRING THE KIDS</Text>
            <View>
              <Text style={styles.imageText}>We have a complimentary nursery staffed by volunteers or you are welcome to bring the kids into the service.</Text>
            </View>
          </ImageBackground>
        </View>
        <View style={styles.imageContainer}>
          <ImageBackground source={image3} resizeMode="cover" style={styles.image}>
            <Text style={styles.imageTextTitle}>SERVICE STYLE</Text>
            <View>
              <Text style={styles.imageText}>Music. Honest conversations about Jesus and society today.</Text>
            </View>
          </ImageBackground>
        </View>
      </ScrollView>
    )
}

const styles = StyleSheet.create({
  blockHeading: {
    flex: 1,
    width: '100%',
    height: '100%', // this view should take up 100% of component given to us
    flexDirection: 'row', // main axis
    alignItems: 'center',  // cross axis ie center vertically
    //justifyContent: 'center',
    paddingBottom: 5,
    
    borderBottomColor: '#CBC7CF',
    borderBottomWidth: 1
  },
  block: {
    flex: 1,
    width: '100%',
    height: '100%', // this view should take up 100% of component given to us
    flexDirection: 'column', // main axis
    //alignItems: 'center',  // cross axis ie center horizontally
    //justifyContent: 'space-around',
    paddingTop: 10,
    paddingLeft: 20
  },
  blockContent1: {
    fontSize: 15,
    fontFamily: 'Gothic' 
  },
  blockText: {
    fontFamily: 'Gothic',
    fontSize: 12
  },
  imageContainer: {
    paddingTop: 20,
  },
  image: {
    width: 250,
    height: 250,
    padding: 30,
    alignItems: 'center',
   
  },
  imageText: {
    fontFamily: 'Gothic',
    color: 'white'
  },
  imageTextTitle: {
    fontSize: 15,
    fontFamily: 'Gothic-Bold',
    color: 'white',
    margin: 5,
    padding: 5,
    borderBottomColor: 'white',
    borderBottomWidth: 1
  }
  

  
})