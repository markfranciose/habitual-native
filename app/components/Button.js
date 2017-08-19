import React, { Component } from 'react';
import { Button, StyleSheet } from 'react-native';

export default class HabitButton extends Component {
  render() {
    return(
      <Button style={styles.button}
        onPress={null}
        title="Gimme a habit, now!!!"
        color="red"
        accessibilityLabel="Learn more about this purple button"
      />
      )
  }
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 10,
    borderColor: 'white',
  },
});
