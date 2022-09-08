import React from "react";
import { View, Text, ImageBackground, TouchableOpacity } from "react-native";

import { globalStyles } from "../styles/global";

export default function ImageWithButton({...props}) {
    const handlePress = props.handlePress;
    const image = props.image;
    const title = props.title;
    
    return (
        <TouchableOpacity onPress={() => handlePress()} >
          <View style={globalStyles.imageContainer}>
            <ImageBackground source={image} resizeMode="cover" style={globalStyles.image}>
              <View style={globalStyles.imageTextContainer}>
                <Text style={globalStyles.imageTextTitle}>{title}</Text>
              </View>
            </ImageBackground>
          </View>
      </TouchableOpacity>
    )
}