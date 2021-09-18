import * as React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import LogoContainer from '../_shared_components/LogoContainer';
import Form from './components/Form';

export default function Login() {
    return (
        <>
            <ScrollView style={styles.container}>
                <View style={styles.container} />
                <LogoContainer />
                <Form />
            </ScrollView>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 120,
    },
});
