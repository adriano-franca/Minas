import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, SafeAreaView } from 'react-native'
import React, { Component } from 'react'

import params from './src/params'
import Field from './src/components/Field'

export default class App extends Component {
  render(){
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.welcome}>Iniciando o Mines</Text>
      <Text style={styles.instructions}>Tamanho da grade: {params.getRowsAmount()}x{params.getColumnsAmount()}</Text>
      <Field />
      <Field opened />
      <Field opened nearMines={2} />
      <StatusBar style="auto" />
    </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    fontSize: 15,
    }
  }
);
