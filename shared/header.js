import React from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Text, View, Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function Header({ title }) {
    return (
        <View style={styles.header}>
          <Text style={styles.headerText}>{title}</Text>
            
            
            <Image
                style={styles.icon}
                source={require('../assets/family-tree.png')}
            />
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
        fontFamily: 'NotoSerif-Bold',
        fontWeight: 'bold',
        fontSize: 20,
        color: '#333',
        letterSpacing: 1,
    },
    icon: {
          width: 30,
          height: 30,
          borderRadius: 15,
          position: 'absolute',
          left: 250
    }
})