import React from 'react';
import { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { 
    Image,
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
import * as WebBrowser from 'expo-web-browser';


import { images, globalStyles } from '../styles/global';
import Card from '../shared/card';
import ReviewForm from './reviewForm';
import NextStepsForm from './nextStepsForm';

export default function NextSteps({ navigation }) {

  const [steps, setSteps] = useState([
    { title: 'Following Christ', link: 'https://connection.breezechms.com/form/28fea2', key: '1'},
    { title: 'Baptism', link: 'https://connection.breezechms.com/form/a304e3', key: '2'},
    { title: 'Small Groups', link: 'https://connection.breezechms.com/form/d0edcc', key: '3'},
    { title: 'Volunteering', link: 'https://connection.breezechms.com/form/2c8b92', key: '4'},
    { title: 'Membership', link: 'https://connection.breezechms.com/form/a3574e', key: '5'},
    { title: 'The Discipleship Journey', link: 'https://connection.breezechms.com/form/d27b4c', key: '6'}
  ]);
  const [modalOpen, setModalOpen] = useState(false);
  const [formTitle, setFormTitle] = useState('');
  const [formKey, setFormKey] = useState();

  const addReview = (review) => {
    review.key = Math.random().toString();
    setReviews((currentReviews) => {
      return [review, ...currentReviews]
    });
    setModalOpen(false);
  }

  const pressHandler = ({ item }) => {
    setFormTitle(item.title);
    setFormKey(item.key);
    WebBrowser.openBrowserAsync(item.link);
 
   }

    return (
      <View style={globalStyles.container}>
        <Modal visible={modalOpen} animationType='slide'>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.modalContent}>
              <Ionicons 
                name="close" 
                size={24} 
                style={{...styles.modalToggle, ...styles.modalClose}} 
                onPress={() => setModalOpen(false)}
              />
              <NextStepsForm item={{ key: formKey, title: formTitle }}  />
            </View>
          </TouchableWithoutFeedback>
        </Modal>
                
        <FlatList 
          data={steps}
          renderItem={({ item }) => (
          <TouchableOpacity onPress={() => pressHandler({ item })} >
              <View style={globalStyles.imageContainer}>
                <ImageBackground source={images.nextStepsImages[item.key]} resizeMode="cover" style={globalStyles.image}>
                  <View style={globalStyles.imageTextContainer}>
                    <Text style={globalStyles.imageTextTitle}>{item.title}</Text>
                  </View>
                </ImageBackground>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    )
}

const styles = StyleSheet.create({
  modalContent: {
    flex: 1,
  },
  modalToggle: {
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#f2f2f2',
    padding: 10,
    borderRadius: 10,
    alignSelf: 'center',
    color: 'black'
  },
  modalClose: {
    marginTop: 20,
    marginBottom: 0
  },
  image: {
    height: 200,
    width: 200
  }
})