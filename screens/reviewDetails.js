import React from 'react';
import { 
    Stylesheet,
    View,
    Text
} from 'react-native';

import { globalStyles } from '../styles/global';

export default function ReviewDetails({ route, navigation }) {
  
  const { item } = route.params;
  
    return (
      <View style={globalStyles.container}>
        <Text style={globalStyles.titleText}>{item.title}</Text>
        <Text style={globalStyles.text}>{item.body}</Text>
        <Text style={globalStyles.text}>{item.rating}</Text>
      </View>
    )
}