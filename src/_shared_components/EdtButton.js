import * as React from 'react';
import { StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';

const props = {
    type: String,
    text: String,
    callback: Function,
};

export default function EdtButton(props) {
    return (
        <TouchableWithoutFeedback
            onPress={() => {
                props.callback();
            }}
        >
            <View
                style={
                    props.type === 'success'
                        ? styles.successBtn
                        : styles.defaultBtn
                }
            >
                <Text
                    style={
                        props.type === 'success'
                            ? styles.successBtnText
                            : styles.defaultBtnText
                    }
                >
                    {props.text}
                </Text>
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFAFA',
        alignItems: 'center',
    },
    successBtn: {
        width: 360,
        height: 75,
        backgroundColor: '#3773E0',
        alignItems: 'center',
        padding: 28,
        borderRadius: 5,
        marginTop: 15,
        color: '#FFF',
    },
    defaultBtn: {
        width: 360,
        height: 75,
        backgroundColor: '#FFF',
        alignItems: 'center',
        padding: 28,
        borderRadius: 5,
        marginTop: 15,
        color: '#3773E0',
        borderWidth: 1,
        borderColor: '#3773E0',
    },
    defaultBtnText: {
        fontSize: 18,
        color: '#3773E0',
    },
    successBtnText: {
        fontSize: 18,
        color: '#FFF',
    },
});
