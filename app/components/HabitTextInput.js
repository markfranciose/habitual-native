import React, {Component} from 'react';
import {TextInput} from 'react-native';

export default class HabitTextInput extends Component {
  constructor(props) {
    super(props);
    this.state = { habitname: 'What' };
  }

  render() {
    return (
      <TextInput
        style={{height: 40, width: 200, borderColor: 'gray', borderWidth: 1, color: 'white'}}
        onChangeText={(text) => this.setState({text})}
        value={this.state.text}
      />
    );
  }
}
