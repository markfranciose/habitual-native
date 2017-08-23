import React, { Component } from 'react';
import { ActivityIndicator, ListView, Text, View, Image, StatusBar } from 'react-native';
import Reminder from './ReminderContainer';
import DarkTheme from '../components/StatusBarStyles'
import DeleteModal from '../components/DeleteModal'
import StatisticsModal from '../components/StatisticsModal'
import { Show, Home } from './ContainerStyles';

export default class HabitView extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      habitId: this.props.navigation.state.params.id,
      isLoading: true,
      habitStats: '',
      habitName: this.props.navigation.state.params.name
    }
  }

  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.name,
    headerStyle: Home.header,
    headerTitleStyle: Home.headerTitle
  });

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
      <View style={Show.containerStyle}>
        <DarkTheme />

        <View style={Show.statistics} >
          <Text>You have had this habit for: __days</Text>
          <Text>Total Reminders: {totalReminders}{"\n"}</Text>
          <Text>Times you did it: {"\t"}{"\t"}{didHabit}{"\t"} {(percentYes * 100).toFixed(2)}% </Text>
          <Text>Times you missed it: {"\t"}{notDidHabit}{"\t"} {percentNo}%</Text>
        </View>
        <View>
          <StatisticsModal id={this.state.habitId}/>
        </View>
        <View>
          <DeleteModal id={this.state.habitId}/>
        </View>

        <View style={Show.reminders}>
          <Text style={Show.log}>Habit Log</Text>
          <ListView dataSource={this.state.dataSource}
            renderRow={(rowData) => <Reminder rowData={rowData} /> } />
        </View>
      </View>
    );
  }
}