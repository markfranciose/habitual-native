import React, {Component} from 'react';
import {Text, View, ActivityIndicator, Button} from 'react-native';
import HabitsList from '../components/HabitsList'
import { StackNavigator } from 'react-navigation'

var userIdentifier = '12345'


export default class HomeScreen extends Component {
  constructor() {
    super();
    this.state = {
      // isLoading: true,
      habits: []
    };
  }



  // componentWillMount() {
  //   return fetch('http://localhost:3000/users/' + userIdentifier + '/habits')
  //     .then((response) => response.json())
  //     .then((responseJson) => {
  //       this.setState({
  //         isLoading: false,
  //         habits: responseJson,
  //       });
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={{flex: 1, paddingTop: 20}}>
          <ActivityIndicator />
        </View>
      );
    }
    return (
      <View>
        <HabitsList habits={this.state.habits}/>
      </View>
    );
  }



}
