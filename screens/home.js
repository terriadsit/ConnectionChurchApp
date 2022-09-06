import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { 
    View,
    Text,
    Modal,
    StyleSheet,
    ImageBackground,
    Image
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import * as WebBrowser from 'expo-web-browser';


import { globalStyles } from '../styles/global';
import FlatButton from '../shared/button';
import NextStepsForm from './nextStepsForm';


export default function Home({ navigation }) {

  const image1 = require('../assets/asYouAre.jpg');
  const image2 = require('../assets/bringKids.jpg');
  const image3 = require('../assets/serviceStyle.jpg');
  const pallets = require('../assets/palletsShort.jpg');
  const logo = require('../assets/connectionBlack.png');
  const formData = { key: 25, title: 'Connection Church'};

  const handlePress = () => {
    WebBrowser.openBrowserAsync('https://connection.breezechms.com/give/online');
  }

  return (
    // <View>
      
    //     <ImageBackground source={pallets} style={styles.pallets}>
    //       <Image source={logo} style={styles.logo}></Image>
    //     </ImageBackground>
      
     // <ScrollView style={[{ minHeight: 600, paddingBottom: 100}, globalStyles.container]}>
      <ScrollView style={ globalStyles.container}>
        
        <View style={globalStyles.blockHeading}>
          <Text style={globalStyles.titleText}>WHEN & WHERE</Text> 
        </View>
        <View style={globalStyles.block}>
          <View>
            <Text style={globalStyles.blockContent1}>SUNDAYS @ 10 AM</Text>
            <Text style={globalStyles.blockText}>1455 N Rapids Rd</Text>
            <Text style={globalStyles.blockText}>Manitowoc, WI 54220</Text>
            <Text style={globalStyles.blockText}>(920) 684-8845</Text>
            <Text style={globalStyles.blockText}>office@myConnection.church</Text>
         </View>
        </View>
        <View style={globalStyles.block}>
          <View>
            <Text style={globalStyles.blockContent1}>OFFICE HOURS</Text>
            <Text style={globalStyles.blockText}>Tuesday - Thursday</Text>
            <Text style={globalStyles.blockText}>9:30 - 2:30</Text>
            <Text style={globalStyles.blockText}>Or by Appointment</Text>
            <Text style={globalStyles.blockText}>Summer hours may vary</Text>
         </View>
        </View>
        <View style={globalStyles.imageContainer}>
          <ImageBackground source={image1} resizeMode="cover" style={globalStyles.image}>
            <View style={globalStyles.imageTextContainer}> 
              <Text style={globalStyles.imageTextTitle}>COME AS YOU ARE</Text>
              <Text style={globalStyles.imageText}>No dresscode. No labels. No judgement. Come as you are.</Text>
            </View>
          </ImageBackground>
        </View>
        <View style={globalStyles.imageContainer}>
          <ImageBackground source={image2} resizeMode="cover" style={globalStyles.image}>
            <View style={globalStyles.imageTextContainer}>
              <Text style={globalStyles.imageTextTitle}>BRING THE KIDS</Text>
              <Text style={globalStyles.imageText}>We have a complimentary nursery staffed by volunteers or you are welcome to bring the kids into the service.</Text>
            </View>
          </ImageBackground>
        </View>
        <View style={globalStyles.imageContainer}>
          <ImageBackground source={image3} resizeMode="cover" style={globalStyles.image}>
          <View style={globalStyles.imageTextContainer}>
              <Text style={globalStyles.imageTextTitle}>SERVICE STYLE</Text>
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
          <View style={globalStyles.blockHeading}>
            <Text style={globalStyles.titleText}>Connect Card</Text> 
          </View>
          <View style={globalStyles.block}>
             <Text style={globalStyles.blockText}>Fill out our connect card. Let us know if it is your first time visiting.
                Tell us how we can pray for you. Connect with us to discuss you next steps with Connection Church.
                We would love to hear from you!
             </Text>
          </View>
          <NextStepsForm item={{ key: '25', title: 'Connect Card' }}/>
        </View>
       
      </ScrollView>
    //  </View>
    )
}

const styles = StyleSheet.create({
  pallets: {
    
    height: 100,
    width: '100%',
    padding: 0
  },
  logo: {
    height: 50,
    width: 50,
    borderRadius: 25,
    alignSelf: 'center',
    marginTop: 25
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