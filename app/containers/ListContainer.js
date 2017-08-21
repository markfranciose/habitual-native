import React, {Component} from 'react';
import {ListView, Text, StatusBar} from 'react-native';


export default class ListContainer extends Component {
  constructor() {
    super();
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(['Cool Habit', 'Sweet Habit']),
    };
  }

  render() {
    return (
      <StatusBar
     hidden={true} />,
      <ListView

        dataSource={this.state.dataSource}
        renderRow={(rowData) => <Text>{rowData}</Text>}
      />
    );
  }
}
