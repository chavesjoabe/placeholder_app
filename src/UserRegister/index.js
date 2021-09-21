import * as React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import LogoContainer from '../_shared_components/LogoContainer';
import Form from './components/Form';

export default function UserRegister() {
    return (
        <ScrollView>
            <LogoContainer />
            <Text style={styles.formDescription}>Informações do usuário</Text>
            <Form />
        </ScrollView>
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
