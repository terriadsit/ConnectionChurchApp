import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
    
    container: {
        flex: 1,
        padding: 40,
        backgroundColor: 'white'
    },
    titleText: {
        fontFamily: 'Gothic-Bold',
        fontSize: 18,
        color: '#333'
    },
    paragraph: {
        marginVertical: 8,
        lineHeight: 20,
    },
    text: {
        fontFamily: 'Gothic'
    },
    input: {
        borderWidth: 1,
        borderColor: '#ddd',
        padding: 10,
        fontSize: 18,
        borderRadius: 6,
    },
    errorText: {
        color: 'crimson',
        fontWeight: 'bold',
        marginBottom: 10,
        marginTop: 6,
        textAlign: 'center',
    }
});

export const images = {
    nextStepsImages: {
        '1': require('../assets/connectionWhite.png'),
        '2': require('../assets/connectionWhite.png'),
        '3': require('../assets/connectionWhite.png'),
        '4': require('../assets/connectionWhite.png'),
        '5': require('../assets/connectionWhite.png'),
        '6': require('../assets/connectionWhite.png'),
    }
}