import * as React from 'react';
import {
    StyleSheet,
    Text,
    TouchableWithoutFeedback,
    View,
    Image,
} from 'react-native';

<<<<<<< HEAD
export default function Button(props) {  
    
=======
export default function Button(props) {
>>>>>>> main
    const buttonIcon = () => {
        switch (props.name) {
            case 'home':
                return require('../assets/home.png');
            case 'callcenter':
                return require('../assets/callcenter.png');
            case 'responsible':
                return require('../assets/responsible.png');
            case "help":
                return require('../assets/help.png');
            case "help-check":
                return require('../assets/help.png');
        }
    };

    const buttonContainer = () => {
        switch (props.name) {
            case "help":
                return helpViewStyle
            case "help-check":
                return helpCheckViewStyle
            default:
                return styles.container
        }
    }

    const buttonTextStyle = () => {
        if(props.name == "help" || props.name == "help-check") {
            return helpTextStyle
        } else {
            return styles.text
        }
    }

    const helpTextStyle = StyleSheet.compose(styles.text, styles.txtColor)
    const helpViewStyle = StyleSheet.compose(styles.container, styles.bgColor)
    const helpCheckViewStyle = StyleSheet.compose(styles.container, styles.containerHelpCheck)
    
    return (
        <TouchableWithoutFeedback
            onPress={() => {
                props.callback();
<<<<<<< HEAD
        }}>
            <View
                style={buttonContainer()}
            >
                <Image
                source={buttonIcon()}
                />
                <Text style={buttonTextStyle()}
                >
                    {props.text}
                </Text>
=======
            }}
        >
            <View style={styles.container}>
                <Image source={buttonIcon()} />
                <Text style={styles.text}>{props.text}</Text>
>>>>>>> main
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
        marginBottom: 20,
    },
    text: {
        color: 'white',
        fontSize: 18,
        marginTop: 5,
        textTransform: 'uppercase',
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
    },    
    containerHelpCheck: {
        height: 135,
        backgroundColor: 'white',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
});
