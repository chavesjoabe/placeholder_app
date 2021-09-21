import * as React from 'react';
import { StatusBar } from 'react-native';
import CheckPlace from './src/CheckPlace';

export default function App() {
    return (
        <>
            <StatusBar style="auto" />
            <CheckPlace />
        </>
    );
}
