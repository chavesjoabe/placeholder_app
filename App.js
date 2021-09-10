import * as React from 'react';
import { StatusBar, View } from 'react-native';
import ResponsibleRegister from './src/ResponsibleRegister';

export default function App() {
    return (
        <>
            <StatusBar style="auto" />
            <ResponsibleRegister />
        </>
    );
}
