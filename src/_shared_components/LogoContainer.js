import * as React from 'react';
import { Image, StyleSheet, View } from 'react-native';

export default function LogoContainer() {
    return (
        <View style={styles.container}>
            <Image
                style={styles.logo}
                source={require('../assets/black_logo.png')}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFAFA',
        alignItems: 'center',
        marginBottom: 25,
    },
    logo: {
        width: 360,
        resizeMode: 'contain',
    },
});
