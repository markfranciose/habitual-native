import React, {Component} from 'react';
import { AppRegistry, View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
import TimePicker from 'react-native-modal-datetime-picker';
import { NewHabit } from './ContainerStyles';
import RandomHabit from './RandomHabit'

var moment = require('moment');

export default class NewHabitContainer extends Component {
   static navigationOptions = {
    title: "Grow Yoself",
  }
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
      validInput: false,
      dailyVisible: true,
      randomVisible: false,
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
  _showDaily = () => this.setState({dailyVisible: true, randomVisible: false})
  _showRandom = () => this.setState({dailyVisible: false, randomVisible: true})

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
      <View style={NewHabit.newHabitView}>
        <Text style={NewHabit.label}>New Reminder</Text>

        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity style={NewHabit.lilbutton} onPress={this._showRandom}><Text style={NewHabit.buttonText}>Random Mode</Text></TouchableOpacity>
          <TouchableOpacity style={NewHabit.lilbutton} onPress={this._showDaily}><Text style={NewHabit.buttonText}>Daily Mode</Text></TouchableOpacity>
        </View>
        {this.state.randomVisible && <RandomHabit/>}

       { this.state.dailyVisible && <View >
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
        </View> }
      </View>
    );
  }
}
