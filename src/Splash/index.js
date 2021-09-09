import * as React from "react";
import { render } from "react-dom";
import { View, Image, Text, StyleSheet } from "react-native";

export default function Splash(){
    return (
        <View style={styles.container}>
    
        <Image
            source={require('../assets/placeholder_logo.png')}
          />

    
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#3773E0"
    }
})
        


