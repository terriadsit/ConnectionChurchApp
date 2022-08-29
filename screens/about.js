import React from 'react';
import { 
    TouchableOpacity,
    View,
    Text
} from 'react-native';

import { globalStyles } from '../styles/global';
import Card from '../shared/card';

export default function About({ navigation }) {
    return (
      <View style={globalStyles.container}>
        <TouchableOpacity onPress={() => navigation.navigate('Staff')}>
              <Card>
                <Text style={globalStyles.titleText}>Staff</Text>
              </Card>
        </TouchableOpacity>
        
        <TouchableOpacity onPress={() => navigation.navigate('Visit')}>
              <Card>
                <Text style={globalStyles.titleText}>Visit</Text>
              </Card>
        </TouchableOpacity>
       
        <TouchableOpacity onPress={() => navigation.navigate('CoreValues')}>
              <Card>
                <Text style={globalStyles.titleText}>Core Values</Text>
              </Card>
        </TouchableOpacity>
            
      </View>
    )
}