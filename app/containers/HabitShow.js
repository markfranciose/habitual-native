import React, { Component } from 'react';
import { ActivityIndicator, ListView, Text, View, Image, StatusBar } from 'react-native';
import Reminder from './ReminderContainer';
import styles from './ContainerStyles'
import DarkTheme from '../components/StatusBarStyles'
import DeleteModal from '../components/DeleteModal'

export default class HabitView extends Component {
  static navigationOptions = {
    title: "Details",
    headerStyle: styles.header,
    headerTitleStyle: styles.headerTitle
  }
  constructor(props) {
    super(props);
    this.state = {
      habitId: this.props.navigation.state.params.id,
      isLoading: true,
      habitStats: '',
      habitName: ""
    }
  }

  // const { title } = this.state.habitName

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
    console.log(this.state.habitStats)
    let totalReminders = this.state.habitStats.totalReminders


    if (this.state.isLoading) {
      return (
        <View style={{flex: 1, paddingTop: 20}}>
          <ActivityIndicator />
        </View>
      );
    }

    console.log(this.state.dataSource);

    return (
      <View style={{
        flex: 1,
        paddingTop: 20,
        backgroundColor: '#EDEDED'
      }}>
      <DarkTheme/>
      <Text>{this.state.habitName}{"\n"}</Text>
      <Text>Total Reminders: {totalReminders}{"\n"}</Text>
      <DeleteModal id={this.state.habitId}/>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => <Reminder rowData={rowData} /> } />
      </View>
    );
  }
}
