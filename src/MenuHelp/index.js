import * as React from 'react';
import { ScrollView, Alert, StyleSheet, View} from 'react-native';

import LoggedHeader from '../_shared_components/LoggedHeader';
import Button from '../_shared_components/Button';

const handlePressHomeBtn = () => {
    Alert.alert('Button PAGINA_INICIAL');
};
const handlePressCallCenterBtn = () => {
    Alert.alert('Button LIGAR_PARA_CENTRAL');
};
const handlePressResponsibleBtn = () => {
    Alert.alert('Button RESPONSIBLE');
};


export default function MenuHelp() {
    return (
        <ScrollView>
            <LoggedHeader />
            <View style={styles.container}>
                <View style={{marginTop: 30}}>           
                    <Button text="Voltar Para Página Inicial" name="home" callback={handlePressHomeBtn} />
                    <Button text="Ligar para Central" name="callcenter" callback={handlePressCallCenterBtn} />
                    <Button text="Ligar Para Responsável" name="responsible" callback={handlePressResponsibleBtn} />
                </View> 
            </View> 
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFAFA',
        alignItems: 'center',
    }
});
