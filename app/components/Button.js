import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';

export default class HabitButton extends Component {
  render() {
    return(
        <Text>There should be text in here!!!</Text>
      )
  }
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 10,
    borderColor: 'white',
  },
});
