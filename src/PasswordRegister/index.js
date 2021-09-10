import * as React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import LogoContainer from '../_shared_components/LogoContainer';
import Form from './components/Form';

export default function UserRegister() {
    return (
        <View style={styles.container}>
            <LogoContainer />
            <Text style={styles.formDescription}>Cadastro de senha</Text>
            <Form />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 55,
    },
    formDescription: {
        fontSize: 20,
        color: '#787878',
        marginLeft: 15,
    },
});
