import * as React from "react";
import { render } from "react-dom";
import { View, Image, Text } from "react-native";

export default function Splash(){
    return (
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#3773E0"
          }}>
    
        <Image
            source={require('../../assets/placeholder_logo.png')}
          />

    
        </View>
    )
}
        


