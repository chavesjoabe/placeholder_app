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
            case "help":
                return require('../assets/help.png');
        }
    }

    const helpTextStyle = StyleSheet.compose(styles.text, styles.txtColor)
    const helpViewStyle = StyleSheet.compose(styles.container, styles.bgColor)
    
    return (
        <TouchableWithoutFeedback 
            onPress={() => {
                props.callback();
        }}>
            <View
                style={props.name === "help" ? helpViewStyle : styles.container}
            >
                <Image
                source={buttonIcon()}
                />
                <Text style={props.name === "help" ? helpTextStyle : styles.text}
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
    txtColor: {
        color: 'black',
        marginTop: 10
    },
    bgColor: {
        backgroundColor: 'white',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    }
});
