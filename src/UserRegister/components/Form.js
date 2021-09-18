import { useNavigation } from '@react-navigation/core';
import * as React from 'react';
import { Alert, StyleSheet, TextInput, View } from 'react-native';
import EdtButton from '../../_shared_components/EdtButton';

export default function Form() {
    const navigation = useNavigation();

    const handlePressNextBtn = () => {
        navigation.navigate('PasswordRegister');
    };
    const handlePressCancelBtn = () => {
        navigation.navigate('Login');
    };

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
                placeholder="CPF"
                keyboardType="numeric"
                style={styles.inputContainer}
            />
            <TextInput
                placeholder="Data de nascimento"
                keyboardType="numeric"
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
                    callback={handlePressNextBtn}
                />
                <EdtButton text="CANCELAR" callback={handlePressCancelBtn} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFAFA',
        alignItems: 'center',
        marginBottom: 20,
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
        marginTop: 25,
    },
});
