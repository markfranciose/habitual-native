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
    console.log(this.props.navigation);

    this.state = {
      habitId: this.props.navigation.state.params.id,
      habitName: this.props.navigation.state.params.name,
      isLoading: true,
      habitStats: '',
    }
  }

  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.name,
    headerStyle: Home.header,
    headerTitleStyle: Home.headerTitle
  });

  componentWillMount() {
    // return fetch('https://habitualdb.herokuapp.com/users/12345/habits/'+ this.state.habitId)
    return fetch('https://habitualdb.herokuapp.com/users/12345/habits/'+ this.state.habitId)
    .then((response) => response.json())
    .then((responseJson) => {
      let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
      console.log(responseJson)
      this.setState({
        habitName: responseJson.name,
        habitStats: responseJson.stats,
        pieChart: responseJson.stats.pieChart,
        isLoading: false,
        dataSource: ds.cloneWithRows(responseJson.reminders),
      });
    })
    .catch((error) => {
      console.error(error);
    });
  }

/**
Old
<View style={Show.statistics} >
  <Text>You have had this habit for: __days</Text>
  <Text>Total Reminders: {totalReminders}{"\n"}</Text>
  <Text>Times you did it: {"\t"}{"\t"}{didHabit}{"\t"} {(percentYes * 100).toFixed(2)}% </Text>
  <Text>Times you missed it: {"\t"}{notDidHabit}{"\t"} {percentNo}%</Text>
</View>
**/

  render() {
    let totalReminders = this.state.habitStats.totalReminders
    let didHabit = this.state.habitStats.yesReminders
    let missedHabit = totalReminders - didHabit
    // let percentYes = this.state.pieChart..percentageAccepted
    // let percentNo = (100 - percentYes)
    // let percentNo = ((1 - percentYes) * 100).toFixed(2)

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
        <View style={Show.pieChartCard}>
          <StatisticsModal
            id={this.state.habitId}
            name={this.state.habitName}
            habitStats={this.state.pieChart}
          />
        </View>

        <View style={Show.reminders}>
          <Text style={Show.log}>Habit Log</Text>
          <ListView
            style={Show.listView}
            contentContainerStyle={Show.listItems}
            dataSource={this.state.dataSource}
            renderRow={(rowData) => <Reminder
              style={Show.reminderCard}
              rowData={rowData} />
            } />
        </View>

        <View style={Show.deleteButton}>
          <DeleteModal id={this.state.habitId}/>
        </View>
      </View>
    );
  }
}