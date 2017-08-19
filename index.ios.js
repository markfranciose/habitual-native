/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import HabitButton from './app/components/Button.js'
import Picture from './app/components/Picture'
import HabitTextInput from './app/components/HabitTextInput'
import ListContainer from './app/containers/ListContainer'

export default class HabitualFrontEndRN extends Component {
  render() {
    return (
      <View style={styles.container}>
      <Picture />
      <Text style={styles.instructions}>
        Enter the name of the habit that you want to build
      </Text>
      <HabitTextInput />
      <Text style={styles.instructions}>
        What time of the day do you want to be reminded?
      </Text>
      <HabitTextInput />
      <Text style={styles.instructions}>
        How often do you want to be reminded?
      </Text>
      <HabitTextInput />
      <HabitButton />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: 'white',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('HabitualFrontEndRN', () => HabitualFrontEndRN);



