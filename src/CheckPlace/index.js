import * as React from 'react';
import { View } from 'react-native';

import LoggedHeader from '../_shared_components/LoggedHeader';
import Form from './components/Form'

export default function CheckPlace() {
    return (
        <View style={{flex: 1}}>
            <LoggedHeader />
            <Form />
        </View>
    );
}
