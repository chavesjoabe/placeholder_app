import * as React from "react";
import {  Image, StyleSheet, View } from "react-native";

export default function LoggedHeader() {
  return (
    <View style={styles.container}>
        <Image style={styles.logo} source={require('../assets/white_logo.png')}/>
    </View>    
  );
}

const styles = StyleSheet.create({
    container: {
        top: 0,
        height: 130,
        backgroundColor: "#3773E0",
        position: 'relative',
    },
    logo: {
        position: 'absolute',
        width: 200,
        top: 90,
        left: 15
    }
})