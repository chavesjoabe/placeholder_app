import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Alert, StyleSheet, TextInput, View } from 'react-native';
import EdtButton from '../../_shared_components/EdtButton';
import ApiClient from '../../api/Api.client';

export default function Form() {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handlePressLoginBtn = async () => {
        const user = {
            email: email,
            password: password,
        };

        const logged = await ApiClient.createSession(user);
        if (logged) {
            if (typeof logged === 'string') {
                return Alert.alert('Usuário nao encontrado');
            }
            return navigation.navigate('CheckPlace');
        } else {
            return Alert.alert('Campos inválidos ou não preenchidos');
        }
    };
    const handlePressRegisterBtn = () => {
        navigation.navigate('UserRegister');
    };
    const handlePressCallCenterBtn = () => {
        Alert.alert('Button LIGAR_PARA_CENTRAL');
    };

    return (
        <View style={styles.container}>
            <TextInput
                autoCapitalize="none"
                placeholder="Email"
                keyboardType="email-address"
                style={styles.inputContainer}
                onChangeText={(value) => {
                    setEmail(value);
                }}
                value={email}
            />
            <TextInput
                id="password"
                autoCapitalize="none"
                placeholder="Password"
                keyboardType="default"
                secureTextEntry={true}
                style={styles.inputContainer}
                onChangeText={(value) => setPassword(value)}
                value={password}
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
        marginTop: 45,
    },
});
