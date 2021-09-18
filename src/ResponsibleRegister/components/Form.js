import { useNavigation } from '@react-navigation/core';
import * as React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import EdtButton from '../../_shared_components/EdtButton';

export default function Form() {
    const navigation = useNavigation();

    const handlePressRegisterBtn = () => {
        navigation.navigate('Login');
    };

    const handlePressReturnBtn = () => {
        navigation.navigate('PasswordRegister');
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
                placeholder="Celular"
                keyboardType="numeric"
                style={styles.inputContainer}
            />

            <View style={styles.btnContainer}>
                <EdtButton
                    text="CADASTRAR"
                    type="success"
                    callback={handlePressRegisterBtn}
                />
                <EdtButton text="CANCELAR" callback={handlePressReturnBtn} />
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
        marginTop: 120,
    },
});
