import * as React from 'react';
import { useState } from 'react';
import { ScrollView, Alert, StyleSheet, View, Image, Text, TouchableWithoutFeedback} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as Speech from 'expo-speech';

import LoggedHeader from '../_shared_components/LoggedHeader';
import Button from '../_shared_components/Button';

const directionsIcon = (directions) => {
    switch (directions) {
        case "right":
            return require('../assets/arrow_right.png')
        case "left":
            return require('../assets/arrow_left.png')
        case "up":
            return require('../assets/arrow_up.png')
        case "down":
            return require('../assets/arrow_down.png')
    }
}

export default function Directions({ route: { params } }) {
    const navigation = useNavigation();

    const handlePressHomeBtn = () => {
        navigation.navigate('Home');
    };

    const distance = 50 
    const destiny = params.name
    const [plate, setPlate] = useState("Placa 493021")
    const [directions, setDirections] = useState("right")

    const speak = () => {
        const thingToSay = `Destino ${params.name} Localização atual Placa 493021`;
        Speech.speak(thingToSay, {
            language: 'pt-BR'
        });
    };

    return (
        <ScrollView>
            <LoggedHeader />
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
                        <TouchableWithoutFeedback onPress={speak}>
                        <Image
                        source={require('../assets/listen.png')}
                        />
                        </TouchableWithoutFeedback>
                    </View>              
                </View>        
                <Button text="Voltar Para Página Inicial" name="home" callback={handlePressHomeBtn} />
            </View>
        </ScrollView>
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

