import React, {Component} from 'react';
import { AppRegistry, View, TextInput, TouchableOpacity, Text, StyleSheet, PushNotificationIOS } from 'react-native';
import TimePicker from 'react-native-modal-datetime-picker';
import { NewHabit } from './ContainerStyles';
import NotificationsIOS, { NotificationAction, NotificationCategory } from 'react-native-notifications';
import ModePicker from '../components/ModePicker'

var moment = require('moment');

let positiveResponse = new NotificationAction({
  activationMode: "background",
  title: "Yes!",
  identifier: "YES_RESPONSE"
}, (action, completed) => {
  console.log("YES RECEIVED");
  console.log(JSON.stringify(action));
  fetch('https://habitualdb.herokuapp.com/users/' + '12345' + '/habits/' + action.notification.getData().habitID + '/reminders', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        reminder: { answer: "yes"  }
      })
  })
  .then((response) => response.json())
  .then((responseJson) => {
    // console.log("Reminder successfully created with id: " + responseJson.id);
  })
  completed();
});

let negativeResponse = new NotificationAction({
  activationMode: "background",
  title: "No ",
  identifier: "NO_RESPONSE"
}, (action, completed) => {
  console.log("NO RECEIVED");
  console.log(JSON.stringify(action));
  fetch('https://habitualdb.herokuapp.com/users/' + '12345' + '/habits/' + action.notification.getData().habitID + '/reminders', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        reminder: { answer: "no"  }
      })
  })
  .then((response) => response.json())
  .then((responseJson) => {
    // console.log("Reminder successfully created with id: " + responseJson.id);
  })
  completed();
});

let reminderResponses = new NotificationCategory({
  identifier: "REMINDER_RESPONSES",
  actions: [positiveResponse, negativeResponse],
  context: "default"
});

export default class RandomHabit extends Component {
   static navigationOptions = {
    title: "Create a new habit",
  }

  constructor(props) {
    super(props);
    NotificationsIOS.requestPermissions([reminderResponses]);
    PushNotificationIOS.requestPermissions();
    NotificationsIOS.consumeBackgroundQueue();
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
          reminder_time: this.state.startTime,
          end_time: this.state.endTime
        }
      })
    })
    .then((response) => response.json())
    .then((responseJson) => {
      console.log(responseJson)
      responseJson.array.map((item, i) => PushNotificationIOS.scheduleLocalNotification({
        fireDate: item,
        alertBody: "Will this work???",
        repeatInterval: "day",
        category: "REMINDER_RESPONSES",
        userInfo: { habitID: responseJson.id },
      }))
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
