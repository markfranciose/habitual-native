import React, {Component} from 'react';
import {Switch, View, Text} from 'react-native';
import styles from './ComponentStyles'


export default class NewHabitSwitcher extends Component {
  constructor(props) {
    super(props);
    this.state = {
      SwitchIsOn: false
    }
  }

  render() {
    return (
      <View>
        <Text>Choose a once Daily Reminder or Random Interval</Text>
        <Switch
          onValueChange={(value) => this.setState({SwitchIsOn: value})}
          value={this.state.SwitchIsOn} />
      </View>
    );
  }
}


