import React, {Component} from 'react';
import { AppRegistry, View, TextInput, TouchableOpacity, Text, StyleSheet, Switch, KeyboardAvoidingView } from 'react-native';
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
      endTime: null,
      ReminderNumber: null,
      isTimePickerVisible: false,
      PickerTwoVis: false,
      isTimeChosen: false,
      isTime2Chosen: false,
      ShowInput: false,
      visible: false,
      //validInput: false
    };
  }

  _submitForm = () => {
    let habitName = this.state.habitName;
    let startTime = this.state.startTime;
    let endTime = this.state.endTime
    return fetch('http://localhost:3000/test', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        habit: {
          name: habitName,
          reminder_frequency: this.state.ReminderNumber,
          reminder_start_time: startTime,
          reminder_end_time: endTime
        }
      })
    })
  }

  // _checkValidInput = () => {
  //   if (this.state.isTimeChosen && this.state.habitName) {

  //   }
  // };

  _toggleTimePicker = () => this.setState({isTimePickerVisible: !this.state.isTimePickerVisible});
  _toggleTimePicker2 = () => this.setState({PickerTwoVis: !this.state.PickerTwoVis});
  hideThings = () => this.setState({visible: !this.state.visible})

  _handleTimePicked = (time) => {
    // this._checkValidInput;
    this.setState({
      isTimePickerVisible: !this.state.isTimePickerVisible,
      isTimeChosen: true,
      startTime: time
    });
  };

  _handleTimePicked2 = (time) => {
    //this._checkValidInput;
    this.setState({
      PickerTwoVis: !this.state.PickerTwoVis,
      isTime2Chosen: true,
      endTime: time
    });
  };

  render() {
    return (
      <View style={{flex: 1}}>
      <View style={{height: 50, backgroundColor: 'blue'}}>
      <TouchableOpacity onPress={this.hideThings}><Text>Random Mode</Text></TouchableOpacity>
      <TouchableOpacity onPress={this.hideThings}><Text>Daily Mode</Text></TouchableOpacity></View>
      { this.state.visible && <KeyboardAvoidingView style={styles.newHabitView} keyboardVerticalOffset={1}>


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
        <TouchableOpacity onPress={this._toggleTimePicker2}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>{this.state.isTime2Chosen ? moment(this.state.endTime).format('h:mm a') : "End Time"}</Text>
          </View>
        </TouchableOpacity>
        <TimePicker
          isVisible={this.state.isTimePickerVisible}
          mode='time'
          titleIOS='Choose a Start Time'
          onConfirm={this._handleTimePicked}
          onCancel={this._toggleTimePicker}
        />
        <TimePicker
          isVisible={this.state.PickerTwoVis}
          mode='time'
          titleIOS='Choose an End Time'
          onConfirm={this._handleTimePicked2}
          onCancel={this._toggleTimePicker2}
        />
        <TextInput
          style={styles.inputBox}
          keyboardType='numeric'
          placeholder="Reminders per day"
          onChangeText={(ReminderNumber) => this.setState({ReminderNumber})}
          value={this.state.ReminderNumber}
        />

        <TouchableOpacity
          isVisible={this.state.validInput}
          onPress={this._submitForm}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Submit</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView> }
      <View>
      </View>
      </View>
    );
  }
}
