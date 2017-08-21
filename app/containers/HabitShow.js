import React, { Component } from 'react';
import { ActivityIndicator, ListView, Text, View, Image } from 'react-native';

export default class HabitView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      habitId: this.props.navigation.state.params.id,
      isLoading: true,
      habitName: ""
    }
  }

  componentWillMount() {
    return fetch('https://habitualdb.herokuapp.com/users/12345/habits/'+ this.state.habitId)
      .then((response) => response.json())
      .then((responseJson) => {
        let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.setState({
          isLoading: false,
          dataSource: ds.cloneWithRows(responseJson),
        }, function() {
          // do something with new state
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    console.log(this.props)
    if (this.state.isLoading) {
      return (
        <View style={{flex: 1, paddingTop: 20}}>
          <ActivityIndicator />
        </View>
      );
    }

    return (
      <View style={{flex: 1, paddingTop: 20}}>
      <Text> Could get the habit name with a lil change of the controller</Text>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => <Text>Did You do it?  {rowData.answer} {"\n"}Time: {rowData.created_at}{"\n"}{"\n"}</Text>}
        />
      </View>
    );
  }
}
