import * as React from 'react';
import { ScrollView } from 'react-native';

import LoggedHeader from '../_shared_components/LoggedHeader';
import Form from './components/Form'

export default function Home() {
    return (
        <ScrollView>
            <LoggedHeader />
            <Form />
        </ScrollView>
    );
}
