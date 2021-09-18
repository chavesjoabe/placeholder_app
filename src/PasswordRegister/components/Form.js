import { useNavigation } from '@react-navigation/core';
import * as React from 'react';
import { Alert, StyleSheet, TextInput, View } from 'react-native';
import EdtButton from '../../_shared_components/EdtButton';

export default function Form() {
    const navigation = useNavigation();

    const handlePressLoginBtn = () => {
        navigation.navigate('ResponsibleRegister');
    };
    const handlePressCancelBtn = () => {
        navigation.navigate('UserRegister');
    };

    return (
        <View style={styles.container}>
            <TextInput
                placeholder="Senha"
                secureTextEntry={true}
                keyboardType="default"
                style={styles.inputContainer}
            />
            <TextInput
                placeholder="Confirme sua senha"
                secureTextEntry={true}
                keyboardType="default"
                style={styles.inputContainer}
            />

            <View style={styles.btnContainer}>
                <EdtButton
                    text="PRÓXIMO"
                    type="success"
                    callback={handlePressLoginBtn}
                />
                <EdtButton text="VOLTAR" callback={handlePressCancelBtn} />
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
        marginTop: 280,
    },
});
