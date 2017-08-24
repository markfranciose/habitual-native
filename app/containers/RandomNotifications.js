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
  fetch('https://habitualdb.herokuapp.com/users/12345/habits/' + action.notification.getData().habitID + '/reminders', {
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
      endTime: null,
      isTimePickerVisible: false,
      isTimePicker2Visible: false,
      isTimeChosen: false,
      isTime2Chosen: false,
      validInput: false,
      dailyVisible: true,
      randomVisible: false,
      reminderNumber: 1
    };
  }

  _submitForm2 = () => {
    let habitName = this.state.habitName;
    let habitTime = this.state.startTime;
    return fetch('https://habitualdb.herokuapp.com/random', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        habit: {
          name: "What the hell>>>",
          reminder_frequency: this.state.reminderNumber,
          reminder_time: habitTime,
          end_time: this.state.endTime
        }
      })
    })
    .then((response) => response.json())
    .then((responseJson) => {
      console.log(responseJson)
      responseJson.array.map((item, i) =>
      PushNotificationIOS.scheduleLocalNotification({
        fireDate: item,
        alertBody: this.state.habitName,
        repeatInterval: "day",
        category: "REMINDER_RESPONSES",
        userInfo: { habitID: responseJson.id },
      }))
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

  _showRandom = () => this.setState({dailyVisible: true, randomVisible: false})
  _showDaily = () => this.setState({dailyVisible: false, randomVisible: true})
  _toggleTimePicker = () => this.setState({isTimePickerVisible: !this.state.isTimePickerVisible});
  _toggleTimePicker2 = () => this.setState({isTimePicker2Visible: !this.state.isTimePicker2Visible});

  _handleTimePicked = (time) => {
    this._checkValidInput;
    this.setState({
      isTimePickerVisible: !this.state.isTimePickerVisible,
      isTimeChosen: true,
      startTime: time
    });
  };

  _handleTimePicked2 = (time) => {
    this._checkValidInput;
    this.setState({
      isTimePicker2Visible: !this.state.isTimePickerVisible,
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
          value={this.state.habitName} />
        <TextInput
          style={NewHabit.inputBox}
          keyboardType='numeric'
          placeholder="Reminders per day"
          onChangeText={(reminderNumber) => this.setState({reminderNumber})}
          value={this.state.reminderNumber} />

        <TouchableOpacity onPress={this._toggleTimePicker}>
          <View style={NewHabit.button}>
            <Text style={NewHabit.buttonText}>{this.state.isTimeChosen ? moment(this.state.startTime).format('h:mm a') : "Start Time"}</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={this._toggleTimePicker2}>
          <View style={NewHabit.button}>
            <Text style={NewHabit.buttonText}>{this.state.isTime2Chosen ? moment(this.state.endTime).format('h:mm a') : "End"}</Text>
          </View>
        </TouchableOpacity>

        <TimePicker
          isVisible={this.state.isTimePickerVisible}
          mode='time'
          titleIOS='Choose a Start Time'
          onConfirm={this._handleTimePicked}
          onCancel={this._toggleTimePicker} />
                  <TimePicker
          isVisible={this.state.isTimePicker2Visible}
          mode='time'
          titleIOS='Choose an End Time'
          onConfirm={this._handleTimePicked2}
          onCancel={this._toggleTimePicker2} />
        <TouchableOpacity
          isVisible={this.state.validInput}
          onPress={this._submitForm2}>
          <View style={NewHabit.button}>
            <Text style={NewHabit.buttonText}>Submit</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}
