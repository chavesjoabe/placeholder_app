import * as React from 'react';
import { Image, TouchableWithoutFeedback, StyleSheet, View } from 'react-native';

//TODO: Ajustar o click do Botão

export default function FindButton(props) {
    return (
        <View style={styles.btnFindContainer}>
            <TouchableWithoutFeedback 
                onPress={() => {
                    props.callback();
                }
            }>
            <View style={styles.btnFindCircleArea}>
                <Image source={require('../assets/mic.png')}></Image>
            </View>
            </TouchableWithoutFeedback>
        </View> 
    );
}

const styles = StyleSheet.create({
    btnFindContainer: {
        marginTop: 100, 
        height: 120, 
        display: 'flex', 
        width: '100%', 
        backgroundColor: 'white', 
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    btnFindCircleArea: {
        width: 200,
        height: 200,
        borderRadius: 200 / 2,
        backgroundColor: '#3773E0',
        alignItems: 'center',
        justifyContent: 'center',
        top: -100
    }
});
