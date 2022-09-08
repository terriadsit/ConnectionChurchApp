import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
    
    container: {
        flex: 1,
        padding: 40,
        backgroundColor: 'white',
        height: '100%',
        
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
        fontFamily: 'Gothic',
        fontSize: 13
    },
    input: {
        borderWidth: 1,
        borderColor: '#ddd',
        padding: 10,
        fontSize: 18,
        borderRadius: 6,
    },
    blockHeading: {
       paddingBottom: 5,
        borderBottomColor: '#CBC7CF',
        borderBottomWidth: 1
      },
      block: {
        paddingTop: 10,
        paddingLeft: 20,
        paddingBottom: 10
      },
      blockContent1: {
        fontSize: 15,
        fontFamily: 'Gothic' 
      },
      blockText: {
        fontFamily: 'Gothic',
        fontSize: 13,
        
      },
    imageContainer: {
        paddingTop: 20,
        alignSelf: 'center'
    },
    image: {
        width: 250,
        height: 250,
        padding: 30,
        justifyContent: 'center',
        
        alignItems: 'center',
    },
    imageTextTitle: {
        fontSize: 15,
        fontFamily: 'Gothic-Bold',
        color: 'black',
        margin: 5,
        borderBottomColor: 'black',
        borderBottomWidth: 1
    },
    imageTextContainer: {
        backgroundColor: 'rgba(255,255,255,0.5)',
        borderRadius: 8,
        padding: 10,
     },
    imageText: {
        fontFamily: 'Gothic',
        color: 'black',
        fontSize: 13,
        opacity: 1.0
    },
    
    errorText: {
        color: 'crimson',
        fontWeight: 'bold',
        marginBottom: 10,
        marginTop: 6,
        textAlign: 'center',
    },
    videoContainer: {
        flex: 1,
        width: '100%',
        height: '100%', // this view should take up 100% of component given to us
        flexDirection: 'column', // main axis
        //alignItems: 'center',
        justifyContent: 'space-around' 
    },
    videoButton: {
        
    }
});

export const images = {
    nextStepsImages: {
        '1': require('../assets/followJesus.jpg'),
        '2': require('../assets/baptism.jpg'),
        '3': require('../assets/smallGroups.jpg'),
        '4': require('../assets/volunteering.jpg'),
        '5': require('../assets/membership.jpg'),
        '6': require('../assets/journey1.jpg'),
    }
}