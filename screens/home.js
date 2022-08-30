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



    return (
      <View style={globalStyles.container}>
        <Text>Home Screen</Text> 
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