import React, {Component} from 'react';
import { AppRegistry, View, TextInput, TouchableOpacity, Text, StyleSheet, Switch } from 'react-native';
import TimePicker from 'react-native-modal-datetime-picker';
import styles from './ContainerStyles';

var moment = require('moment');

export default class NewHabitContainer extends Component {
   static navigationOptions = {
    title: "Create a new habit",
  }

  constructor(props) {
    super(props);
    this.state = {
      habitName: null,
      startTime: null,
      isTimePickerVisible: false,
      isTimeChosen: false,
      ShowInput: false
      //validInput: false
    };
  }

  _submitForm = () => {
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
  }

  // _checkValidInput = () => {
  //   if (this.state.isTimeChosen && this.state.habitName) {

  //   }
  // };

  _toggleTimePicker = () => this.setState({isTimePickerVisible: !this.state.isTimePickerVisible});

  _handleTimePicked = (time) => {
    this._checkValidInput;
    this.setState({
      isTimePickerVisible: !this.state.isTimePickerVisible,
      isTimeChosen: true,
      startTime: time
    });
  };

  render() {
    return (
      <View style={styles.newHabitView}>
        <Text style={styles.label}>New Habit</Text>
        <TextInput
          style={styles.inputBox}
          placeholder="Habit"
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
          titleIOS='Choose a start Time'
          onConfirm={this._handleTimePicked}
          onCancel={this._toggleTimePicker}
        />
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
