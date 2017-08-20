import React, {Component} from 'react';
import { AppRegistry, View, TextInput } from 'react-native';

export default class NewHabitContainer extends Component {
  // make this a container - container is sorta like view, component is sort of like partial
  // set state whenever text is updated, use fetch to make post
  // touchable opacity button to send off creation
  // front end validation

  constructor(props) {
    super(props);
    this.state = { text: 'placeholder', text2: 'other place', user-id: '' };
  }


  render() {
    return (
      <View style={{}}>
        <TextInput
          style={{
            height: 40,
            fontWeight: '600',
            textAlign: 'center',
            borderColor: 'gray',
            borderWidth: 1
          }}
          onChangeText={(text2) => this.setState({text2})}
          value={this.state.text2}
        />
        <TextInput
          style={{
            height: 40,
            fontWeight: '600',
            textAlign: 'center',
            borderColor: 'gray',
            borderWidth: 1
          }}
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
        />
      </View>
    );
  }
}
