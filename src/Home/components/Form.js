import * as React from 'react';
import { StyleSheet, View, Alert } from 'react-native';

import Button from '../../_shared_components/Button';
import FindButton from '../../_shared_components/FindButton';
import History from '../../History';

const localizations = [
    {
        id: 0,
        localization: "Lorem ipsum dolor 1"
    },
    {
        id: 1,
        localization: "Lorem ipsum dolor 2"
    },
    {
        id: 2,
        localization: "Lorem ipsum dolor 3"
    },
    {
        id: 3,
        localization: "Lorem ipsum dolor 4"
    },
]

const handlePressHelpBtn = () => {
    Alert.alert('Button HELP');
}

const handlePressFindBtn = () => {
    Alert.alert('Button FIND');
}

export default function Form() {
    return (
        <View style={styles.container}>
            <History localizations={localizations}/>          
            
            <Button name="help" text="Solicitar Ajuda" callback={handlePressHelpBtn}></Button>

            <FindButton callback={handlePressFindBtn} />         
        </View>   
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFAFA',
        alignItems: 'center',
    }
});
