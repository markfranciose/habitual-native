import React, {Component} from 'react';
import { AppRegistry, View, TextInput, TouchableOpacity, Text, StyleSheet, PushNotificationIOS } from 'react-native';
import TimePicker from 'react-native-modal-datetime-picker';
import { NewHabit } from './ContainerStyles';
import NotificationsIOS, { NotificationAction, NotificationCategory } from 'react-native-notifications';

var moment = require('moment');

let positiveResponse = new NotificationAction({
  activationMode: "background",
  title: "Yes! 👍",
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
    console.log("Sent request for reminder")
    console.log(responseJson);
  })
  .catch((error) => {
    console.error(error);
  });
  completed();
});

let negativeResponse = new NotificationAction({
  activationMode: "background",
  title: "No 😔",
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
    console.log("Sent request for reminder")
    console.log(responseJson);
  })
  .catch((error) => {
    console.error(error);
  });
  completed();
});

let reminderResponses = new NotificationCategory({
  identifier: "REMINDER_RESPONSES",
  actions: [positiveResponse, negativeResponse],
  context: "default"
});

export default class NewHabitContainer extends Component {
   static navigationOptions = {
    title: "Grow Yoself",
  }

  constructor(props) {
    super(props);
    NotificationsIOS.requestPermissions([reminderResponses]);
    PushNotificationIOS.requestPermissions();
    NotificationsIOS.consumeBackgroundQueue();
    // PushNotificationIOS.cancelLocalNotifications();
    this.state = {
      habitName: null,
      startTime: null,
      isTimePickerVisible: false,
      isTimeChosen: false,
      validInput: false
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
    .then((response) => response.json())
    .then((responseJson) => {
      PushNotificationIOS.scheduleLocalNotification({
        fireDate: habitTime,
        alertBody: habitName,
        repeatInterval: "day",
        category: "REMINDER_RESPONSES",
        userInfo: { habitID: responseJson.id },
      })
      console.log("Habit successfully created with id: " + responseJson.id);
    })
    .catch((error) => {
      console.error(error);
    });
  }

  _checkValidInput = () => {
    if (this.state.isTimeChosen && this.state.habitName) {

    }
  };

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
      <View style={NewHabit.newHabitView}>
        <Text style={NewHabit.label}>New Reminder</Text>
        <TextInput
          style={NewHabit.inputBox}
          placeholder="Name"
          onChangeText={(habitName) => this.setState({habitName})}
          value={this.state.habitName} />
        <TouchableOpacity onPress={this._toggleTimePicker}>
          <View style={NewHabit.button}>
            <Text style={NewHabit.buttonText}>{this.state.isTimeChosen ? moment(this.state.startTime).format('h:mm a') : "Start Time"}</Text>
          </View>
        </TouchableOpacity>
        <TimePicker
          isVisible={this.state.isTimePickerVisible}
          mode='time'
          titleIOS='Choose a Time'
          onConfirm={this._handleTimePicked}
          onCancel={this._toggleTimePicker} />
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
