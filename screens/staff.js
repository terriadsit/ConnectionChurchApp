import React from 'react';
import { 
    StyleSheet,
    View,
    Text,
    Image
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import { globalStyles, images } from '../styles/global';
import Card from '../shared/card';
import FlatButton from '../shared/button';
import * as MailComposer from "expo-mail-composer"

export default function Staff({ route, navigation }) {
  
  const pastorChris = require('../assets/ChrisAndBelinda.jpg');
  const pastorChristine = require('../assets/Christine.jpg');
  const pastorAutumn = require('../assets/Autumn.jpg');
  const sarah = require('../assets/Sarah.jpg');

  const subject = 'sent from Connection Church App'

  const pressHandler = (email) => {
    MailComposer.composeAsync({
      recipients: [email], // array of email addresses
      subject: subject,
      body: ''
    })
  }

   return (
      <ScrollView style={globalStyles.container}>
        <View style={styles.scrollContainer}>
          <Card>
            <View style={styles.cardContainer}>
              <Image source={pastorChris} style={styles.image}>
              </Image>
              <View style={styles.textContainer}>
                <Text style={globalStyles.titleText}>PASTOR CHRIS GILBERT</Text>
                <Text style={globalStyles.text}>Lead Pastor</Text>
              </View>
              <FlatButton 
                text={'email'}
                onPress={() => pressHandler('chris.gilbert@myconnection.church')}
              />
            </View>
          </Card>
          <Card>
            <View style={styles.cardContainer}>
              <Image source={pastorChristine} style={styles.image}>
              </Image>
              <View style={styles.textContainer}>
                <Text style={globalStyles.titleText}>PASTOR CHRISTINE DONDLINGER</Text>
                <Text style={globalStyles.text}>Associate of Second Half Ministry</Text>
              </View>
              <FlatButton 
                text={'email'}
                onPress={() => pressHandler('christine.d@myconnection.church')}
              />
            </View>
          </Card>
          <Card>
            <View style={styles.cardContainer}>
              <Image source={pastorAutumn} style={styles.image}>
              </Image>
              <View style={styles.textContainer}>
                <Text style={globalStyles.titleText}>PASTOR AUTUMN BOSCH</Text>
                <Text style={globalStyles.text}>Associate of Care and Counseling</Text>
              </View>
              <FlatButton 
                text={'email'}
                onPress={() => pressHandler('autumn@myconnection.church')}
              />
            </View>
          </Card>
          <Card>
            <View style={styles.cardContainer}>
              <Image source={sarah} style={styles.image}>
              </Image>
              <View style={styles.textContainer}>
                <Text style={globalStyles.titleText}>SARAH ROSINSKY</Text>
                <Text style={globalStyles.text}>Operations & Administration, Interim Children's Ministry Director</Text>
              </View>
              <FlatButton 
                text={'email'}
                onPress={() => pressHandler('sarah.r@myconnection.church')}
              />
            </View>
          </Card>
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
  cardContainer: {
    alignItems: 'center',
  },
  image: {
    height: 200,
    width: 200,
    borderRadius: 100,
    marginBottom: 10,
  },
  textContainer: {
    paddingBottom: 10 
  },
  scrollContainer: {
    paddingBottom: 20,
  }
})
