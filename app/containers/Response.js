import React, { Component } from 'react';
import { View, Button, Text } from 'react-native';
// import Styles from './styles'



export default class Response extends Component{

  constructor(props) {
    super(props);
    this.state = {
      // ultimately props.user_id
      user_id: 1,
      // ultimately props.habit_id
      habit_id: 1,
      // ultimatley props.habit_namne
      habit_name: "Habit Here"
    }
  }

  // buttonPress(new_answer) {
  //   fetch('https://habitualdb.herokuapp.com/users/1/habits/' + this.state.habit_id + '/reminders', {
  //           method: 'POST',
  //           headers: {
  //             'Accept': 'application/json',
  //             'Content-Type': 'application/json',
  //           },
  //           body: JSON.stringify({
  //             reminder: { answer: new_answer  }
  //           })
  //         });
  // }

  render() {
    return (
      <View>
      <Text>{this.state.habit_name}</Text>
        <Button title="Yes"
          onPress={ () => fetch('https://habitualdb.herokuapp.com/users/' + this.state.user_id + '/habits/' + this.state.habit_id + '/reminders', {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              reminder: { answer: "Yes"  }
            })
          })
        }/>
        <Button title="No"
          onPress={ () => fetch('https://habitualdb.herokuapp.com/users/' + this.state.user_id + '/habits/' + this.state.habit_id + '/reminders', {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              reminder: { answer: "No"  }
            })
          })
        }/>
      </View>
    );
  };
}
