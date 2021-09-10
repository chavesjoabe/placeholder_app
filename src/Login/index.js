import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import Form from './components/Form';
import LogoContainer from '../_shared_components/LogoContainer';

export default function Login() {
    return (
        <>
            <View style={styles.container}>
                <LogoContainer />
                <Form />
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 220,
    },
});
