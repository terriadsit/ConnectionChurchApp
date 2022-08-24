import React from 'react';
import { 
    StyleSheet,
    View,
    Text,
    Image
} from 'react-native';

import { globalStyles, images } from '../styles/global';
import Card from '../shared/card';

export default function ReviewDetails({ route, navigation }) {
  
  const { item } = route.params;
    const rating = item.rating
    return (
      <View style={globalStyles.container}>
        <Card>
          <Text style={globalStyles.titleText}>{item.title}</Text>
          <Text style={globalStyles.text}>{item.body}</Text>
          <View style={styles.rating}>
            <Text style={globalStyles.text}>Rating:</Text>
            <Image 
              style={styles.image}
              source={images.ratings[rating]}
            /> 
          </View>
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
