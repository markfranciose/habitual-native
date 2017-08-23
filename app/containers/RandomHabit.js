import React, {Component} from 'react';
import { AppRegistry, View, TextInput, TouchableOpacity, Text, StyleSheet, Switch } from 'react-native';
import TimePicker from 'react-native-modal-datetime-picker';
import { NewHabit } from './ContainerStyles';

var moment = require('moment');

export default class RandomHabit extends Component {
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
    };
  }

  _submitForm = () => {
    return fetch('http://localhost:3000/test', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        habit: {
          name: this.state.habitName,
          reminder_frequency: this.state.ReminderNumber,
          reminder_start_time: this.state.startTime,
          reminder_end_time: this.state.endTime
        }
      })
    })
  }

  _toggleTimePicker = () => this.setState({isTimePickerVisible: !this.state.isTimePickerVisible});
    _toggleTimePicker2 = () => this.setState({PickerTwoVis: !this.state.PickerTwoVis});

  _handleTimePicked = (time) => {
    this.setState({
      isTimePickerVisible: !this.state.isTimePickerVisible,
      isTimeChosen: true,
      startTime: time
    });
  };

    _handleTimePicked2 = (time) => {
    this.setState({
      PickerTwoVis: !this.state.PickerTwoVis,
      isTime2Chosen: true,
      endTime: time
    });
  };

  render() {
    return (
      <View>
        <TextInput
          style={NewHabit.inputBox}
          placeholder="Habit"
          onChangeText={(habitName) => this.setState({habitName})}
          value={this.state.habitName}
        />
        <TextInput
          style={NewHabit.inputBox}
          keyboardType='numeric'
          placeholder="Reminders per day"
          onChangeText={(ReminderNumber) => this.setState({ReminderNumber})}
          value={this.state.ReminderNumber}
        />
        <TouchableOpacity onPress={this._toggleTimePicker}>
          <View style={NewHabit.button}>
            <Text style={NewHabit.buttonText}>{this.state.isTimeChosen ? moment(this.state.startTime).format('h:mm a') : "Start Time"}</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={this._toggleTimePicker2}>
          <View style={NewHabit.button}>
            <Text style={NewHabit.buttonText}>{this.state.isTime2Chosen ? moment(this.state.endTime).format('h:mm a') : "End Time"}</Text>
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

        <TouchableOpacity
          isVisible={this.state.validInput}
          onPress={this._submitForm}>
          <View style={NewHabit.button}>
            <Text style={NewHabit.buttonText}>Submit</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}
