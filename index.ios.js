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
import DeviceInfo from 'react-native-device-info'

export default class HabitualFrontEndRN extends Component {
  constructor(props) {
    super(props);
    this.state = {
        user_id: DeviceInfo.getUniqueID()
     };
  }

  render() {
    return (
      <Text>{this.state.user_id}</Text>
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



