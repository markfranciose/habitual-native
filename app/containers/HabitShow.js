import React, { Component } from 'react';
import { ActivityIndicator, ListView, Text, View, Image } from 'react-native';
import Reminder from './ReminderContainer';
import DeleteModal from '../components/DeleteModal'

export default class HabitView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      habitId: this.props.navigation.state.params.id,
      isLoading: true,
      habitStats: '',
      habitName: ''
    }
  }

  componentWillMount() {
    return fetch('https://habitualdb.herokuapp.com/users/12345/habits/'+ this.state.habitId)
      .then((response) => response.json())
      .then((responseJson) => {
        let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.setState({
          habitName: responseJson.name,
          habitStats: responseJson.stats,
          isLoading: false,
          dataSource: ds.cloneWithRows(responseJson.reminders),
        }, function() {
          // do something with new state
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    let totalReminders = this.state.habitStats.totalReminders
    let didHabit = this.state.habitStats.yesReminders
    let notDidHabit = totalReminders - didHabit
    let percentYes = this.state.habitStats.percentageAccepted
    let percentNo = ((1 - percentYes) * 100).toFixed(2)


    if (this.state.isLoading) {
      return (
        <View style={{flex: 1, paddingTop: 20}}>
          <ActivityIndicator />
        </View>
      );
    }

    return (
      <View style={{flex: 1, paddingTop: 20}}>
      <Text>{this.state.habitName}{"\n"}</Text>
      <Text>You have had this habit for: __days</Text>
      <Text>Total Reminders: {totalReminders}{"\n"}</Text>
      <Text>Times you did it: {"\t"}{"\t"}{didHabit}{"\t"} {(percentYes * 100).toFixed(2)}% </Text>
      <Text>Times you missed it: {"\t"}{notDidHabit}{"\t"} {percentNo}%</Text>
      <Text></Text>
      <DeleteModal id={this.state.habitId}/>

        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => <Reminder rowData={rowData} /> } />
      </View>
    );
  }
}
