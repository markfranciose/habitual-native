import React, {Component} from 'react';
import HabitTextInput from './HabitTextInput'
import { View } from 'react-native'

export default class NewHabit extends Component {
  // make this a container - container is sorta like view, component is sort of like partial
  // set state whenever text is updated, use fetch to make post
  // touchable opacity button to send off creation
  // front end validation

  constructor() {

  }


  render() {
    return (
      <View>
        <HabitTextInput/>
        <HabitTextInput/>
        <HabitTextInput/>
        <HabitTextInput/>
      </View>
    );
  }
}
