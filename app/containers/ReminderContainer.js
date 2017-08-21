import React, { Component } from 'react';
import { View, Text } from 'react-native';

class Reminder extends Component{
  constructor(props){
    super(props);

    console.log(props);

    this.state = {
      // console.log(props);
      moreData: this.props.rowData,
    };

  }

  render(){
    return (
      <View>
        <Text>Did you do it?</Text>
        <Text>Answer: {this.state.moreData.answer}{"\n"}</Text>
        <Text>Time:{"\t\t\t"}{this.state.moreData.created_at}</Text>
      </View>
    );
  };
}

export default Reminder;
