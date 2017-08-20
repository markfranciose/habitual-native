import React, { Component } from 'react';
import { ActivityIndicator, ListView, Text, View, Image } from 'react-native';
import DeviceInfo from 'react-native-device-info'


export default class HabitView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      habitName: "",
      user_id: DeviceInfo.getUniqueID()
    }
  }


  componentWillMount() {
    return fetch('http://localhost:3000/users/' + this.state.user_id + '/habits/1')
      .then((response) => response.json())
      .then((responseJson) => {
        let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.setState({
          isLoading: false,
          habitName: responseJson.name,
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
    if (this.state.isLoading) {
      return (
        <View style={{flex: 1, paddingTop: 20}}>
          <ActivityIndicator />
        </View>
      );
    }

    return (
      <View style={{flex: 1, paddingTop: 120}}>
      <Text>{this.state.habitName}</Text>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => <Text>Reminder: {rowData.answer}, {rowData.created_at}</Text>}
        />
      </View>
    );
  }
}
