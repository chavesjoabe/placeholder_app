import { useNavigation } from '@react-navigation/core';
import React, { useState } from 'react';
import { Alert, StyleSheet, TextInput, View } from 'react-native';
import ApiClient from '../../api/Api.client';
import EdtButton from '../../_shared_components/EdtButton';

export default function Form() {
    const navigation = useNavigation();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [date, setDate] = useState('');
    const [mobile, setMobile] = useState('');

    const handlePressNextBtn = async () => {
        const user = {
            name,
            email,
            password,
            birthday: date,
            mobile,
            isEnabled: true,
        };

        try {
            const createdUser = await ApiClient.createNewUser(user);

            if (!createdUser) {
                Alert.alert(
                    'Nao foi possível realizar o cadastro, tente novamente mais tarde'
                );
            } else {
                navigation.navigate('Login');
            }
        } catch (error) {
            Alert.alert(error.message);
        }
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
                onChangeText={(value) => {
                    setName(value);
                }}
            />
            <TextInput
                placeholder="Email"
                keyboardType="email-address"
                autoCapitalize="none"
                style={styles.inputContainer}
                onChangeText={(value) => {
                    setEmail(value);
                }}
            />
            <TextInput
                placeholder="Password"
                keyboardType="default"
                secureTextEntry={true}
                style={styles.inputContainer}
                onChangeText={(value) => {
                    setPassword(value);
                }}
            />
            <TextInput
                placeholder="Data de nascimento"
                keyboardType="numeric"
                style={styles.inputContainer}
                onChangeText={(value) => {
                    setDate(value);
                }}
            />
            <TextInput
                placeholder="Celular"
                keyboardType="numeric"
                style={styles.inputContainer}
                onChangeText={(value) => {
                    setMobile(value);
                }}
            />

            <View style={styles.btnContainer}>
                <EdtButton
                    text="REGISTRAR"
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
