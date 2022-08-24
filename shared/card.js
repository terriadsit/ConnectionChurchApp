import React from "react";
import { StyleSheet, View } from "react-native";

export default function Card(props){
    return (
        <View style={styles.card}>
            <View style={styles.cardContent}>
                { props.children }
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    card: {
        borderRadius: 6,
        elevation: 3, // distance between card and back of the screen
        backgroundColor: '#fff',
        shadowOffset: { width: 1, height: 1 },  // how much down and right shadow is
        shadowColor: '#333',
        shadowOpacity: 0.3,
        shadowRadius: 2, // how it blends in further out from the card
        marginHorizontal: 4,
        marginVertical: 6
    },
    cardContent: {
        marginHorizontal: 18,
        marginVertical: 20
    }
})