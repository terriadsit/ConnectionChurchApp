import React from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function Header({ title }) {
    return (
        <ImageBackground 
          source={require('../assets/game_bg.png')}
          style={styles.header}
        >
           <Image style={styles.headerImage}
             source={require('../assets/heart_logo.png')} 
            />
          <Text style={{ fontFamily: 'NotoSerif-Bold', fontSize: 20 }}>{title}</Text>
           {/* <Image
                style={styles.icon}
                source={require('../assets/family-tree.png')}
            /> */}
        </ImageBackground>

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
        borderRadius: 12
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
    },
    headerImage: {
        width: 25,
          height: 25,
          marginHorizontal: 10,
          
          left: 0
    }
})