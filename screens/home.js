import React from 'react';
import { 
    Button,
    View,
    Text
} from 'react-native';

import { globalStyles } from '../styles/global';

export default function Home({ navigation }) {
    return (
      <View style={globalStyles.container}>
        <Text style={globalStyles.titleText}>Home Screen</Text>
        <Button
          title="Go to Details"
          onPress={() => navigation.navigate('ReviewDetails')}
        />
      </View>
    )
}