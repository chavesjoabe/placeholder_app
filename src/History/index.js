import * as React from "react";
import { Text, StyleSheet, View } from "react-native";

//TODO: Remover a última breakline

export default function History({ localizations }) {
  return (
    <View style={styles.history}>
        <View style={styles.historyHeader} >
            <Text style={styles.historyHeaderText}>Histórico</Text>    
        </View>
        <View style={styles.historyBody}>
        {localizations?.slice(0, 3).map((item) => (
            <View key={item.id}><Text  style={styles.historyBodyText}>{item.localization}</Text><View style={styles.breakLine} /></View>
        ))}
        </View> 
    </View> 
    
  );
}

const styles = StyleSheet.create({
  history: {
    width: 360,
    height: 223,
    borderRadius: 10,
    backgroundColor: '#fff',
    marginBottom: 20,
    marginTop: 30,
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
},
  historyHeader: {
    height: 48,
    backgroundColor: '#87A8E4',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    justifyContent: 'center'
  },
  historyHeaderText: {
      fontSize: 20,
      color: 'white',
      marginLeft: 15
  },
  historyBody: {
      marginLeft: 15, 
      marginRight: 15
  },
  historyBodyText: {
      color: '#737373',
      fontSize: 20,
      marginBottom: 12,
      marginTop: 15
  },
  breakLine: {
      borderBottomColor: '#D8D8D8',
      borderBottomWidth: 1
  },
})