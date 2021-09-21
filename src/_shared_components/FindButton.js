import * as React from 'react';
import { Image, TouchableWithoutFeedback, StyleSheet, View } from 'react-native';
import Pulse from 'react-native-pulse';

export default function FindButton(props) {
    return (
        <View style={styles.btnFindContainer}>
            {props.pulse && <Pulse color={'#BBD3FF'} numPulses={5} diameter={400} speed={50} duration={2000} />}
            <View style={styles.btnBg} />
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
        alignContent: 'center',
    },
    btnBg: {
        width: '100%',
        position: 'absolute',
        bottom: 0,
        zIndex: 2,
        height: '50%',
        backgroundColor: 'white',
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        elevation: 24
    },
    btnFindCircleArea: {
        width: 185,
        height: 185,
        borderRadius: 185 / 2,
        backgroundColor: '#3773E0',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1,
        elevation: 25
    }
});
