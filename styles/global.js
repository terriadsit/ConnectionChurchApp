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
    imageContainer: {
        paddingTop: 20,
        alignSelf: 'center'
    },
    image: {
        width: 250,
        height: 250,
        padding: 30,
        alignItems: 'center',
    },
    imageTextTitle: {
        fontSize: 18,
        fontFamily: 'Gothic-Bold',
        color: 'white',
        margin: 5,
        //padding: 5,
        borderBottomColor: 'white',
        borderBottomWidth: 1
    },
    imageTextContainer: {
        backgroundColor: 'rgba(0,0,0,0.2)',
        //opacity: 0.1,
        borderRadius: 8,
        //margin: 'auto',
        padding: 10,
        
    },
    imageText: {
        fontFamily: 'Gothic',
        color: 'white',
        fontSize: 13,
        opacity: 1.0
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
        '1': require('../assets/followJesus.jpg'),
        '2': require('../assets/baptism.jpg'),
        '3': require('../assets/smallGroups.jpg'),
        '4': require('../assets/volunteering.jpg'),
        '5': require('../assets/membership.jpg'),
        '6': require('../assets/journey.jpg'),
    }
}