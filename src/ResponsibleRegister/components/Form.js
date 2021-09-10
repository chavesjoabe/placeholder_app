import * as React from 'react';
import { Alert, StyleSheet, TextInput, View } from 'react-native';
import EdtButton from '../../_shared_components/EdtButton';

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
                placeholder="Nome"
                keyboardType="default"
                style={styles.inputContainer}
            />
            <TextInput
                placeholder="Email"
                keyboardType="email-address"
                style={styles.inputContainer}
            />
            <TextInput
                placeholder="Celular"
                keyboardType="numeric"
                style={styles.inputContainer}
            />

            <View style={styles.btnContainer}>
                <EdtButton
                    text="PRÓXIMO"
                    type="success"
                    callback={handlePressLoginBtn}
                />
                <EdtButton text="CANCELAR" callback={handlePressRegisterBtn} />
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
        width: 360,
        height: 75,
        borderColor: '#c4c4c4',
        borderRadius: 5,
        borderWidth: 1,
        padding: 15,
        fontSize: 18,
        marginTop: 15,
    },
    btnContainer: {
        marginTop: 190,
    },
});
