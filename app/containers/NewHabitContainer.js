import React, {Component} from 'react';
import { AppRegistry, View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
import TimePicker from 'react-native-modal-datetime-picker';

export default class NewHabitContainer extends Component {
  // make this a container - container is sorta like view, component is sort of like partial
  // set state whenever text is updated, use fetch to make post
  // touchable opacity button to send off creation
  // front end validation

  constructor(props) {
    super(props);
    this.state = {
      reminderName: '',
      reminderMessage: '',
      isTimePickerVisible: false
    };
  }

  _showTimePicker = () => this.setState({isTimePickerVisible: true});
  _hideTimePicker = () => this.setState({isTimePickerVisible: false});
  _handleTimePicked = (time) => {
    console.log('A time has been picked: ', time);
    this._hideTimePicker();
  };

  render() {
    return (
      <View style={{
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        // flexDirection: 'row'
      }}>
        <Text style={styles.label}>New Reminder</Text>
        <TextInput
          style={styles.inputBox}
          placeholder="Name"
          onChangeText={(reminderName) => this.setState({reminderName})}
          value={this.state.reminderName}
        />
        <TextInput
          style={styles.inputBox}
          placeholder="Message"
          onChangeText={(reminderMessage) => this.setState({reminderMessage})}
          value={this.state.reminderMessage}
        />
        <TouchableOpacity onPress={this._showTimePicker}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Start Time</Text>
          </View>
        </TouchableOpacity>
        <TimePicker
          isVisible={this.state.isTimePickerVisible}
          mode='time'
          titleIOS='Choose a Time'
          onConfirm={this._handleTimePicked}
          onCancel={this._hideTimePicker}
        />
        <TouchableOpacity onPress={this._onPressButton}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Submit</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputBox: {
    marginTop: 20,
    flex: .05,
    width: 240,
    fontWeight: '600',
    textAlign: 'center',
    borderColor: 'lightgray',
    borderWidth: 2,
    padding: 10,
    borderRadius: 10
  },
  label: {
    marginTop: 20,
    fontSize: 24,
    fontWeight: '600'
  },
  button: {
    marginTop: 20,
    width: 240,
    alignItems: 'center',
    backgroundColor: 'darkseagreen',
    borderRadius: 10
  },
  buttonText: {
    padding: 10,
    fontWeight: '600',
    color: 'white'
  }
})
