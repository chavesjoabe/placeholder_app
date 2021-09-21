import * as React from 'react';
import { StyleSheet, View, Alert, Text, Image, TouchableWithoutFeedback} from 'react-native';

import LoggedHeader from '../_shared_components/LoggedHeader';
import FindButton from '../_shared_components/FindButton';

const handlePressFindBtn = () => {
    Alert.alert('Button FIND');
}

export default function Search() {
    return (
        <View style={{flex: 1}}>
            <LoggedHeader />
            <View style={styles.container}>
                <View style={styles.area}>
                    <Text style={styles.txtConfirmDestination}>Você deseja ir para:</Text>
                    <View style={styles.modal}>
                        <View style={{display: 'flex', flexDirection: 'row'}}>
                            <Image source={require('../assets/search.png')} />
                            <Text style={styles.destination}>Shopping XYZ?</Text>
                        </View>
                        <View style={styles.btnContainer}>
                        <TouchableWithoutFeedback 
                            onPress={() => {
                                Alert.alert('Button YES');
                            }
                        }>
                            <View style={styles.btnYes}> 
                                <Text style={styles.txtYes}>SIM</Text>
                            </View>
                        </TouchableWithoutFeedback>
                        <TouchableWithoutFeedback 
                            onPress={() => {
                                Alert.alert('Button NO');
                            }
                        }>
                            <View style={styles.btnNo}> 
                                <Text style={styles.txtNo}>NÃO</Text>
                            </View>
                        </TouchableWithoutFeedback>
                        </View>
                    </View>
                </View>            
                <FindButton pulse callback={handlePressFindBtn} />             
            </View> 
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFAFA',
        justifyContent: 'space-between'
    },
    area: {
        margin: 20
    },
    txtConfirmDestination: {
        fontSize: 18, 
        marginBottom: 20
    },
    modal: {
        width: 360,
        height: 223,
        padding: 30,
        borderRadius: 10,
        backgroundColor: '#fff',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },      
    destination: {
        fontSize: 20,
        color: 'black',
        marginLeft: 50,
        alignSelf: 'center',
    },
    btnContainer: {
        display: 'flex', 
        flexDirection: 'row',
        justifyContent: 'space-between', 
        marginTop: 20
    },
    btnYes: {
        width: 120,
        height: 60, 
        backgroundColor: '#3773E0', 
        alignItems: 'center', 
        justifyContent: 'center'
    },
    btnNo:{
        width: 120, 
        height: 60, 
        borderColor: '#F7442C', 
        borderWidth: 1, 
        alignItems: 'center', 
        justifyContent: 'center'
    },
    txtYes: {
        fontSize: 20, 
        color: 'white'
    },
    txtNo: {
        fontSize: 20, 
        color: '#F7442C'
    },    
});

