import React from 'react';
import { 
    Stylesheet,
    View,
    Text
} from 'react-native';

import { globalStyles } from '../styles/global';


export default function About({ navigation }) {
    return (
      <View style={globalStyles.container}>
        <Text style={globalStyles.titleText}>About Screen</Text>
      </View>
    )
}