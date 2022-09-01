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
import { ScrollView } from 'react-native-gesture-handler';
import { block } from 'react-native-reanimated';
import * as WebBrowser from 'expo-web-browser';


import { globalStyles } from '../styles/global';
import Card from '../shared/card';
import ReviewForm from './reviewForm';
import FlatButton from '../shared/button';
import NextStepsForm from './nextStepsForm';


export default function Home({ navigation }) {

  const image1 = require('../assets/asYouAre.jpg');
  const image2 = require('../assets/bringKids.jpg');
  const image3 = require('../assets/serviceStyle.jpg');
  const formData = { key: 25, title: 'Connection Church'}

  const handlePress = () => {
    WebBrowser.openBrowserAsync('https://connection.breezechms.com/give/online');
  }

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
        <View style={globalStyles.imageContainer}>
          <ImageBackground source={image1} resizeMode="cover" style={globalStyles.image}>
            <Text style={globalStyles.imageTextTitle}>COME AS YOU ARE</Text>
            <View>
              <Text style={globalStyles.imageText}>No dresscode. No labels. No judgement. Come as you are.</Text>
            </View>
          </ImageBackground>
        </View>
        <View style={globalStyles.imageContainer}>
          <ImageBackground source={image2} resizeMode="cover" style={globalStyles.image}>
            <Text style={globalStyles.imageTextTitle}>BRING THE KIDS</Text>
            <View>
              <Text style={globalStyles.imageText}>We have a complimentary nursery staffed by volunteers or you are welcome to bring the kids into the service.</Text>
            </View>
          </ImageBackground>
        </View>
        <View style={globalStyles.imageContainer}>
          <ImageBackground source={image3} resizeMode="cover" style={globalStyles.image}>
            <Text style={globalStyles.imageTextTitle}>SERVICE STYLE</Text>
            <View>
              <Text style={globalStyles.imageText}>Music. Honest conversations about Jesus and society today.</Text>
            </View>
          </ImageBackground>
        </View>
        
        <View style={styles.buttonContainer}>
          <FlatButton 
            text='Donate' 
            onPress={handlePress}>
          </FlatButton>
        </View>
        <View style={styles.connectCard}>
          <View style={styles.blockHeading}>
            <Text style={globalStyles.titleText}>Connect Card</Text> 
          </View>
          <View style={styles.block}>
             <Text style={styles.blockText}>Fill out our connect card. Let us know if it is your first time visiting.
                Tell us how we can pray for you. Connect with us to discuss you next steps with Connection Church.
                We would love to hear from you!
             </Text>
          </View>
          <NextStepsForm item={{ key: '25', title: 'Connect Card' }}/>
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
    paddingLeft: 20,
    paddingBottom: 10
  },
  blockContent1: {
    fontSize: 15,
    fontFamily: 'Gothic' 
  },
  blockText: {
    fontFamily: 'Gothic',
    fontSize: 13,
    
  },
  
  buttonContainer: {
    padding: 20,
    paddingBottom: 40
  },
  connectCard: {
    //backgroundColor: 'orange',
    //padding: 20,
    
  }
  

  
})