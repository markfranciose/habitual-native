import React, {Component} from 'react';
import { AppRegistry, View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
import TimePicker from 'react-native-modal-datetime-picker';
import styles from './ContainerStyles';

var moment = require('moment');

export default class NewHabitContainer extends Component {
  // make this a container - container is sorta like view, component is sort of like partial
  // set state whenever text is updated, use fetch to make post
  // touchable opacity button to send off creation
  // front end validation

  constructor(props) {
    super(props);
    this.state = {
      habitName: null,
      startTime: null,
      isTimePickerVisible: false,
      isTimeChosen: false,
      validInput: false
    };
  }

  // _showTimePicker = () => this.setState({isTimePickerVisible: true});
  // _hideTimePicker = () => this.setState({isTimePickerVisible: false});


  _submitForm = () => {
    // console.log('Yo@@@@@@@@@@@@@@');
    let habitName = this.state.habitName;
    let habitTime = this.state.startTime;
    return fetch('https://habitualdb.herokuapp.com/users/12345/habits', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        habit: {
          name: habitName,
          reminder_frequency: 1,
          reminder_time: habitTime
        }
      })
    })
    // .then((response) => response.json())
    // .then((responseJson) => {
    //   return responseJson.;
    // })
    // .catch((error) => {
    //   console.error(error);
    // });
  }

  _checkValidInput = () => {
    if (this.state.isTimeChosen && this.state.habitName) {

    }
  };

  _toggleTimePicker = () => this.setState({isTimePickerVisible: !this.state.isTimePickerVisible});

  _handleTimePicked = (time) => {
    this._checkValidInput;
    // console.log('A time has been picked: ', time);
    this.setState({
      isTimePickerVisible: !this.state.isTimePickerVisible,
      isTimeChosen: true,
      startTime: time
    });
  };

  render() {
    return (
      <View style={styles.newHabitView}>
        <Text style={styles.label}>New Reminder</Text>
        <TextInput
          style={styles.inputBox}
          placeholder="Name"
          onChangeText={(habitName) => this.setState({habitName})}
          value={this.state.habitName}
        />
        <TouchableOpacity onPress={this._toggleTimePicker}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>{this.state.isTimeChosen ? moment(this.state.startTime).format('h:mm a') : "Start Time"}</Text>
          </View>
        </TouchableOpacity>
        <TimePicker
          isVisible={this.state.isTimePickerVisible}
          mode='time'
          titleIOS='Choose a Time'
          onConfirm={this._handleTimePicked}
          onCancel={this._toggleTimePicker}
        />
        <TouchableOpacity
          isVisible={this.state.validInput}
          onPress={this._submitForm}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Submit</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}
