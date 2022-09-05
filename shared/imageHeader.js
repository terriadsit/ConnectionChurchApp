import React from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function ImageHeader({ title }) {
    return (
        <View
          source={require('../assets/palletsShort.jpg')}
          resizeMode="cover" 
          style={styles.header}
        >
          <Text>{title}</Text>
        </View>

    )
}

const styles = StyleSheet.create({
    header: {
        flex: 1,
        width: '100%',
        height: '100%', // this view should take up 100% of component given to us
        flexDirection: 'row', // main axis
        alignItems: 'center',  // cross axis ie center vertically
        justifyContent: 'center',
        
    },
    headerText: {
        fontFamily: 'Gothic-Bold',
        fontWeight: 'bold',
        fontSize: 20,
        color: '#333',
        
    },
    icon: {
          width: 30,
          height: 30,
          borderRadius: 15,
          position: 'absolute',
          left: 250
    },
    headerImage: {
        width: 25,
          height: 25,
          marginHorizontal: 10,
          
          left: 0
    }
})