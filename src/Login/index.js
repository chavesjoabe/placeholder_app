import * as React from 'react';
import { StyleSheet } from 'react-native';
import Form from './components/Form';
import LogoContainer from './components/LogoContainer';

export default function Login() {
    return (
        <>
            <LogoContainer />
            <Form />
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 297,
        backgroundColor: '#3773E0',
        alignItems: 'center',
    },
    logo: {
        width: 380,
        marginTop: 222,
    },
});
