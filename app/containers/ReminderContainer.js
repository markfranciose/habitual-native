import React, { Component } from 'react';
import { View, Text } from 'react-native';

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
      <View>
        <Text>Did you do it? {"\t" + this.state.answer}</Text>
        <Text>Time:{"\t\t\t"}{this.state.created_at}</Text>
      </View>
    );
  };
}

export default Reminder;
