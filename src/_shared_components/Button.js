import * as React from 'react';
import { StyleSheet, Text, TouchableWithoutFeedback, View, Image } from 'react-native';

export default function Button(props) {  
    
    buttonIcon = () => {
        switch (props.name) {
            case "home":
                return require('../assets/home.png');
            case "callcenter":
                return require('../assets/callcenter.png');
            case "responsible":
                return require('../assets/responsible.png');
        }
    }

    return (
        <TouchableWithoutFeedback 
            onPress={() => {
                props.callback();
        }}>
            <View
                style={styles.container}
            >
                <Image
                source={buttonIcon()}
                />
                <Text style={styles.text}
                >
                    {props.text}
                </Text>
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
        width: 360,
        height: 230,
        backgroundColor: '#87A8E4',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        color: '#FFF',
        marginBottom: 20
    },
    text: {
        color: 'white',
        fontSize: 18,
        marginTop: 5,
        textTransform: 'uppercase'
    },
});
