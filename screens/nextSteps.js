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
    StyleSheet
} from 'react-native';


import { images, globalStyles } from '../styles/global';
import Card from '../shared/card';
import ReviewForm from './reviewForm';

export default function NextSteps({ navigation }) {

  const [steps, setSteps] = useState([
    { title: 'Follow Christ', key: '1'},
    { title: 'Baptism', key: '2'},
    { title: 'Small Groups', key: '3'},
    { title: 'Volunteer', key: '4'},
    { title: 'Membership', key: '5'},
    { title: 'Discipleship Journey', key: '6'}
  ]);
  const [modalOpen, setModalOpen] = useState(false)

  const addReview = (review) => {
    review.key = Math.random().toString();
    setReviews((currentReviews) => {
      return [review, ...currentReviews]
    });
    setModalOpen(false);
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
              <ReviewForm addReview={addReview} />
            </View>
          </TouchableWithoutFeedback>
        </Modal>
        
        <Ionicons 
          name="add" 
          size={24} 
          style={styles.modalToggle}
          onPress={() => setModalOpen(true)}
        />
        
        <FlatList 
          data={steps}
          renderItem={({ item }) => (
            // <TouchableOpacity  onPress={() => navigation.navigate('ReviewDetails', { item })}>
            <TouchableOpacity > 
              <Card>
                <Text style={globalStyles.titleText}>{item.title}</Text>
                <Image 
                  style={styles.image}
                  source={images.nextStepsImages[item.key]}
                />
              </Card>
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
    height: 50,
    width: 50
  }
})