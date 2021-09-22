import React, { useState, useEffect } from 'react';
import { ScrollView, StyleSheet, View, Text, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Voice from '@react-native-voice/voice';
import { Permissions } from "expo";

import LoggedHeader from '../_shared_components/LoggedHeader';
import Button from '../_shared_components/Button';
import FindButton from '../_shared_components/FindButton';
import Historic from '../Historic';
import ApiClient from '../api/Api.client';

import Castle from '../assets/castle.png'
import { TouchableOpacity } from 'react-native-gesture-handler'

const localizations = [
  {
    id: 0,
    localization: 'Lorem ipsum dolor 1'
  },
  {
    id: 1,
    localization: 'Lorem ipsum dolor 2'
  },
  {
    id: 2,
    localization: 'Lorem ipsum dolor 3'
  },
  {
    id: 3,
    localization: 'Lorem ipsum dolor 4'
  },
]

export default function Home() {
  const [results, setResults] = useState([]);
  const [isListening, setIsListening] = useState(false);
  const [searchResult, setSearchResult] = useState(null);

  useEffect(() => {
    ;(async () => {
      const { status, expires, permissions } = await Permissions.askAsync(
        Permissions.AUDIO_RECORDING
      );
      if (status !== "granted") {
        //Permissions not granted. Don't show the start recording button because it will cause problems if it's pressed.
        this.setState({showRecordButton: false});
      } else {
        this.setState({showRecordButton: true});
      }
    })()
  }, [])

  useEffect(() => {
    function onSpeechResults(e) {
      setResults(e.value ?? []);
    }

    function onSpeechError(e) {
      console.error(e);
    }

    Voice.onSpeechError = onSpeechError;
    Voice.onSpeechResults = onSpeechResults;
    return function cleanup() {
      Voice.destroy().then(Voice.removeAllListeners);
    };
  }, []);

  useEffect(() => {
    ;(async () => {
      if (results.length > 0) {
        const d = await ApiClient.searchPlace(results.join(' ').normalize("NFD").replace(/[\u0300-\u036f]/g, ""))
        if (d) setSearchResult(d)
        else setResults([])
        await Voice.stop();
      }
    })()
  }, [results])

  const navigation = useNavigation();

  const handlePressHelpBtn = () => {
    navigation.navigate('MenuHelp');
  };

  const handlePressFindBtn = () => {
    navigation.navigate('Search');
  }

  async function toggleListening() {
    try {
      if (isListening) {
        await Voice.stop();
        setIsListening(false);
        setResults([])
        setSearchResult(null)
      } else {
        setResults([]);
        await Voice.start('pt_BR');
        setIsListening(true);
      }
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <ScrollView style={{ flex: 1, backgroundColor: 'red' }} contentContainerStyle={{ flexGrow: 1, height: '100%'}}>
      <LoggedHeader />
      <View style={styles.container}>
        <View style={{ alignItems: 'center' }}>
          {!isListening && <>
            <Historic localizations={localizations} />
            {/*<Button name="help" text="Solicitar Ajuda" callback={handlePressHelpBtn} />*/}
          </>}
          {isListening && searchResult && <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              paddingLeft: 18,
              paddingRight: 18,
              width: '100%',
              marginTop: 18
            }}
          >
            <Text style={{ alignSelf: 'flex-start', width: '100%' }}>Você deseja ir para:</Text>
            <View
              style={{
                marginTop: 18,
                backgroundColor: '#FFF',
                width: '100%',
                borderRadius: 10,
                shadowColor: '#222422',
                shadowOffset: {
                  width: 0,
                  height: 12,
                },
                shadowOpacity: 0.2,
                shadowRadius: 15.00,
              }}
            >
              <View style={{
                flexDirection: 'row',
                paddingTop: 12
              }}>
                <Image source={Castle} style={{ maxWidth: 77, maxHeight: 96, marginLeft: 30, marginRight: 46 }} />
                <Text style={{ alignSelf: 'center', fontSize: 22 }}>{searchResult.name}?</Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  marginTop: 20,
                  marginRight: 14,
                  marginLeft: 14,
                  marginBottom: 15,
                  justifyContent: 'space-between'
                }}
              >
                <TouchableOpacity
                  onPress={() => {
                    setIsListening(false)
                    navigation.navigate('Directions', searchResult)
                  }}
                  style={{
                    backgroundColor: '#3773E0',
                    borderRadius: 3,
                    paddingTop: 25,
                    paddingBottom: 25,
                    paddingLeft: 58,
                    paddingRight: 58,
                  }}
                >
                  <Text style={{ color: '#FFF', fontSize: 20 }}>SIM</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    setResults([])
                    setSearchResult(null)
                  }}
                  style={{
                    borderRadius: 3,
                    borderColor: '#F7442C',
                    borderWidth: 1,
                    paddingTop: 24,
                    paddingBottom: 24,
                    paddingLeft: 57,
                    paddingRight: 57,
                  }}
                >
                  <Text style={{ color: '#F7442C', fontSize: 20 }}>NÃO</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>}
        </View>

        <FindButton callback={toggleListening} pulse={false}/>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#FFFAFA',
  }
});