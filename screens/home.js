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
    StyleSheet
} from 'react-native';


import { globalStyles } from '../styles/global';
import Card from '../shared/card';
import ReviewForm from './reviewForm';

export default function Home({ navigation }) {

  const [reviews, setReviews] = useState([
    { title: 'War of the Worlds', rating: 5, body: "A Fun book to read on Holloween", key: '1'},
    { title: 'Alcatraz and the Librarians', rating: 4, body: "A Fun book to read on Holloween", key: '2'},
    { title: 'The Hobbit', rating: 5, body: "A Fun book to read on Holloween", key: '3'},
    { title: 'The Lord of the Rings', rating: 5, body: "A Fun book to read on Holloween", key: '4'}
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
          data={reviews}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => navigation.navigate('ReviewDetails', { item })}>
              <Card>
                <Text style={globalStyles.titleText}>{item.title}</Text>
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
  }
})