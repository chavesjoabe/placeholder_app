import * as React from 'react';
import { StatusBar, View } from 'react-native';
import Directions from './src/Directions';

export default function App() {
    return (
        <>
            <StatusBar style="auto" />
            <Directions />
        </>
    );
}
