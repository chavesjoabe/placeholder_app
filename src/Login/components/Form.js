import * as React from 'react';
import { Alert, StyleSheet, TextInput, View } from 'react-native';
import EdtButton from './EdtButton';

const handlePressLoginBtn = () => {
    Alert.alert('Button ENTRAR');
};
const handlePressRegisterBtn = () => {
    Alert.alert('Button REGISTRAR');
};
const handlePressCallCenterBtn = () => {
    Alert.alert('Button LIGAR_PARA_CENTRAL');
};

export default function Form() {
    return (
        <View style={styles.container}>
            <TextInput
                placeholder="Email ou Usuário"
                keyboardType="email-address"
                style={styles.inputContainer}
            />
            <TextInput
                placeholder="Password"
                keyboardType="default"
                secureTextEntry={true}
                style={styles.inputContainer}
            />

            <View style={styles.btnContainer}>
                <EdtButton
                    text="ENTRAR"
                    type="success"
                    callback={handlePressLoginBtn}
                />
                <EdtButton
                    text="REGISTRAR-SE"
                    type="default"
                    callback={handlePressRegisterBtn}
                />
                <EdtButton
                    text="LIGAR PARA CENTRAL"
                    type="default"
                    callback={handlePressCallCenterBtn}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFAFA',
        alignItems: 'center',
    },
    inputContainer: {
        width: 380,
        height: 80,
        borderColor: '#c4c4c4',
        borderRadius: 5,
        borderWidth: 1,
        padding: 15,
        fontSize: 18,
        marginTop: 15,
    },
    btnContainer: {
        marginTop: 30,
    },
});
