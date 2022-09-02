import React from 'react';
import { 
    StyleSheet,
    View,
    Text,
    ImageBackground
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import { globalStyles, images } from '../styles/global';
import Card from '../shared/card';

export default function CoreValues({ route, navigation }) {
  const pallets = require('../assets/pallets.png');


   return (
    
        
      
      <ScrollView style={globalStyles.container}>
        
        <View style={styles.scrollContainer}>
          <View style={globalStyles.blockHeading}>
            <Text style={globalStyles.titleText}>JESUS.</Text> 
          </View>
          <View style={globalStyles.block}>
            <Text style={globalStyles.blockContent1}>It's all about Jesus!</Text>
            <Text style={globalStyles.blockText}></Text>
          </View>
          <View style={globalStyles.blockHeading}>
            <Text style={globalStyles.titleText}>THE OTHER SIX DAYS.</Text> 
          </View>
          <View style={globalStyles.block}>
            <Text style={globalStyles.blockContent1}>We strive to live a faith that impacts our other six days of our week and not just Sunday.</Text>
            <Text style={globalStyles.blockText}></Text>
          </View>
          <View style={globalStyles.blockHeading}>
            <Text style={globalStyles.titleText}>PERSONAL GROWTH.</Text> 
          </View>
          <View style={globalStyles.block}>
            <Text style={globalStyles.blockContent1}>We learn from Jesus to live like Jesus.</Text>
            <Text style={globalStyles.blockText}></Text>
          </View>
          <View style={globalStyles.blockHeading}>
            <Text style={globalStyles.titleText}>BIG HEART > BIG CHURCH.</Text> 
          </View>
          <View style={globalStyles.block}>
            <Text style={globalStyles.blockContent1}>Our communities need a church of big-hearted ridiculously generous people willing to love and serve anybody.</Text>
            <Text style={globalStyles.blockText}></Text>
          </View>
        </View>
        
      </ScrollView>
      
    )
}

const styles = StyleSheet.create({
  rating: {
    flexDirection: 'row',
    justifyContent: 'center', // center of card horizontally
    paddingTop: 16,
    marginTop: 16,
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
  
    

  scrollContainer: {
    paddingBottom: 20
  }
})
