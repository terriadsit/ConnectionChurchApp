import React from 'react';
import { 
    Stylesheet,
    View,
    Text
} from 'react-native';

import { globalStyles } from '../styles/global';


export default function Messages({ navigation }) {
    return (
      <View style={globalStyles.container}>
        <Text style={globalStyles.titleText}>Messages Screen</Text>
      </View>
    )
}