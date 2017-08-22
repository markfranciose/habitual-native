import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { ReminderStyle } from './ContainerStyles';

class Reminder extends Component{
  constructor(props){
    super(props);

    var date = new Date(this.props.rowData.created_at);
    var options = { weekday: 'long',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric' };

    this.state = {
      answer: this.props.rowData.answer,
      created_at: date.toLocaleString('en-US', options)
    };

  }

  render(){
    return (
      <View style={ ReminderStyle.container }>
        <Text style={ ReminderStyle.answer }>{this.state.answer}</Text>
        <Text style={ ReminderStyle.date }>{this.state.created_at}</Text>
      </View>
    );
  };
}

export default Reminder;
