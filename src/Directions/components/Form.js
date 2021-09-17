import * as React from 'react';
import { useState } from 'react';
import { Alert, StyleSheet, View, Image, Text, TouchableWithoutFeedback} from 'react-native';

import Button from '../../_shared_components/Button';

const handlePressHomeBtn = () => {
    Alert.alert('Button PAGINA_INICIAL');
};

const directionsIcon = (directions) => {
    switch (directions) {
        case "right":
            return require('../../assets/arrow_right.png')
        case "left":
            return require('../../assets/arrow_left.png')
        case "up":
            return require('../../assets/arrow_up.png')
        case "down":
            return require('../../assets/arrow_down.png')
    }
}

export default function Form() {   
    const distance = 50 
    const destiny = 'Shopping ABC'
    const [plate, setPlate] = useState("Placa XYZ123")
    const [directions, setDirections] = useState("right")    

    return (
        <View style={styles.container}>
            <View style={styles.directionsContainer}>                    
                <View style={styles.directionsArea}>
                    <Image
                    source={directionsIcon(directions)}
                    />
                    <Text style={styles.directionsText}
                    >
                        {distance} METROS
                    </Text>
                </View>
            </View>   
            <View style={styles.destinyArea}>
                <Text style={styles.destinyText}
                >
                    Destino: {destiny}
                </Text>
                <Text style={styles.destinyText}
                >
                    Localização atual: {plate}
                </Text>
                <View style={styles.btnListenArea}>
                    <TouchableWithoutFeedback onPress={() => {
                        Alert.alert('Button LISTEN');
                    }}>
                    <Image
                    source={require('../../assets/listen.png')}
                    />
                    </TouchableWithoutFeedback>
                </View>              
            </View>        
            <Button text="Voltar Para Página Inicial" name="home" callback={handlePressHomeBtn} />
        </View>   
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFAFA',
        alignItems: 'center',
        marginTop: 30
    },
    directionsContainer: {
        width: 360,
        height: 230,
        backgroundColor: '#E8F0FF',
        borderRadius: 10,
        color: '#FFF',
        marginBottom: 20
    },
    directionsArea: {
        justifyContent: 'center',
        alignItems: 'center', 
        marginTop: 20
    },
    directionsText: {
        color: 'black',
        fontSize: 18,
    },
    destinyArea: {
        width: 360,
        height: 230,
        backgroundColor: '#87A8E4',
        borderRadius: 10,
        color: '#FFF',
        marginBottom: 20,
        padding: 30
    },    
    destinyText: {
        color: 'white',
        fontSize: 18,
        marginTop: 5,
    },
    btnListenArea: {
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        marginTop: 20
    }
});
