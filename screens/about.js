import React from 'react';
import { 
    View,
    Text
} from 'react-native';

import { globalStyles } from '../styles/global';


export default function About({ navigation }) {
    return (
      <View style={globalStyles.container}>
        <Text style={globalStyles.titleText}>About Screen</Text>
        <Text>In the beginning, God created the heavens and the earth
          and the earth was formless and void and darkness covered
          the surface of the earth.
        </Text>
      </View>
    )
}