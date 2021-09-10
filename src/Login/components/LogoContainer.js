import * as React from 'react';
import { Image, StyleSheet, View } from 'react-native';

export default function LogoContainer() {
    return (
        <View style={styles.container}>
            <Image
                style={styles.logo}
                source={require('../../assets/black_logo.png')}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 297,
        backgroundColor: '#FFFAFA',
        alignItems: 'center',
        padding: 0,
    },
    logo: {
        width: 380,
        marginTop: 222,
    },
});
