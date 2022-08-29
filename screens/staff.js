import React from 'react';
import { 
    StyleSheet,
    View,
    Text,
    Image
} from 'react-native';

import { globalStyles, images } from '../styles/global';
import Card from '../shared/card';

export default function Staff({ route, navigation }) {
  
   return (
      <View style={globalStyles.container}>
        <Card>
          <Text style={globalStyles.titleText}>Staff</Text>
          
          
        </Card>
      </View>
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
  image: {
    marginTop: 4,
    marginLeft: 2,
  }
})
