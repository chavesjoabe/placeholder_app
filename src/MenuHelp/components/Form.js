import * as React from 'react';
import { Alert, FlatList, StyleSheet, TextInput, ScrollView, View} from 'react-native';
import Button from '../../_shared_components/Button';

const handlePressHomeBtn = () => {
    Alert.alert('Button PAGINA_INICIAL');
};
const handlePressCallCenterBtn = () => {
    Alert.alert('Button LIGAR_PARA_CENTRAL');
};
const handlePressResponsibleBtn = () => {
    Alert.alert('Button RESPONSIBLE');
};

export default function Form() {
    return (
        <View style={styles.container}>              
            <Button text="Voltar Para Página Inicial" name="home" callback={handlePressHomeBtn} />
            <Button text="Ligar para Central" name="callcenter" callback={handlePressCallCenterBtn} />
            <Button text="Ligar Para Responsável" name="responsible" callback={handlePressResponsibleBtn} />
        </View>   
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFAFA',
        alignItems: 'center',
    }
});
