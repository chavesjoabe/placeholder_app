import * as React from 'react';
import { ScrollView, StyleSheet, View, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import LoggedHeader from '../_shared_components/LoggedHeader';
import Button from '../_shared_components/Button';
import FindButton from '../_shared_components/FindButton';
import Historic from '../Historic';

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

export default function Home() {

    const navigation = useNavigation();

    const handlePressHelpBtn = () => {
        navigation.navigate('MenuHelp');
    };

    const handlePressFindBtn = () => {
        navigation.navigate('Search');
    }

    return (
        <ScrollView>
            <LoggedHeader />
            <View style={styles.container}>
                <View style={{alignItems: 'center'}}>
                <Historic localizations={localizations}/>          
                
                <Button name="help" text="Solicitar Ajuda" callback={handlePressHelpBtn} />
                </View>

                <FindButton callback={handlePressFindBtn} />         
            </View> 
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFAFA',        
    }
});