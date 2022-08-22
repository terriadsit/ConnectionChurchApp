import React from 'react';
import { useState } from 'react';
import { 
    TouchableOpacity,
    FlatList,
    View,
    Text
} from 'react-native';

import { globalStyles } from '../styles/global';

export default function Home({ navigation }) {

  const [reviews, setReviews] = useState([
    { title: 'War of the Worlds', rating: 5, body: "A Fun book to read on Holloween", key: '1'},
    { title: 'Alcatraz and the Librarians', rating: 4, body: "A Fun book to read on Holloween", key: '2'},
    { title: 'The Hobbit', rating: 5, body: "A Fun book to read on Holloween", key: '3'},
    { title: 'The Lord of the Rings', rating: 5, body: "A Fun book to read on Holloween", key: '4'}
  ])

    return (
      <View style={globalStyles.container}>
        <FlatList 
          data={reviews}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => navigation.navigate('ReviewDetails', { item })}>
              <Text style={globalStyles.titleText}>{item.title}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
    )
}