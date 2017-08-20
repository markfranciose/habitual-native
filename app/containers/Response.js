import React, { Component } from 'react';
import { View, Button } from 'react-native';


export default class Response extends Component{

  constructor(props) {
    super(props);
    this.state = {habit_id: 1}
  }


  render() {
    return (
      <View>
        <Button title="Yes"
          onPress={ () => fetch('https://habitualdb.herokuapp.com/users/1/habits/' + this.state.habit_id + '/reminders', {
            method: 'POST',
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            },
            body: JSON.stringify({
            reminder: { answer: "yes"  }
            })
          })
        }
        />
        <Button title="No"
          onPress={ () => fetch('https://habitualdb.herokuapp.com/users/1/habits/1/reminders', {
            method: 'POST',
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            },
            body: JSON.stringify({
            reminder: { answer: "no"  }
            })
          })
        }/>
      </View>
    );
  };
}
