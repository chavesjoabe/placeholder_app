import * as React from 'react';
import {StyleSheet, View, Alert, Image, TouchableWithoutFeedback, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import LoggedHeader from '../_shared_components/LoggedHeader';
import Button from '../_shared_components/Button';

import Pulse from 'react-native-pulse';

let interval


export default function CheckPlace() {

  const navigation = useNavigation();

   interval = setInterval(
    function () {
      navigation.navigate('Home');
      clearInterval(interval)
    }, 1000);

  const handlePressHelpBtn = () => {
    navigation.navigate('MenuHelp');
  };

  return (
    <View style={{flex: 1}}>
      <LoggedHeader/>
      <View style={styles.container}>
        <TouchableWithoutFeedback
          onPress={() => {
            Alert.alert('Button FIND');
          }
          }>
          <View style={styles.btnFindCircleContainer}>
            <View style={styles.btnFindCircleArea}>
              <Image style={styles.btnFindImage} source={require('../assets/placeholder_logo.png')}></Image>
            </View>
            <View style={{zIndex: 1}}>
              <Pulse color={'#BBD3FF'} numPulses={5} diameter={350} speed={10} duration={2000}/>
            </View>
          </View>
        </TouchableWithoutFeedback>

        <Text style={styles.txt}>Toque na placa mais próxima</Text>

        <View style={styles.btnHelpContainer}>
          <Button name="help-check" text="Solicitar Ajuda" callback={handlePressHelpBtn}></Button>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    alignItems: 'center',
    flex: 1
  },
  btnFindCircleContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40
  },
  btnFindCircleArea: {
    width: 175,
    height: 175,
    borderRadius: 175 / 2,
    backgroundColor: '#3773E0',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 20,
    position: 'absolute',
    zIndex: 10
  },
  btnFindImage: {
    width: 78,
    height: 94
  },
  txt: {
    color: "#3773E0",
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 20,
    elevation: 20
  },
  btnHelpContainer: {
    bottom: 0
  }
});