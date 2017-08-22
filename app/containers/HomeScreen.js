import React, {Component} from 'react';
import {Text, View, ActivityIndicator} from 'react-native';
import HabitsList from '../components/HabitsList';
import { StackNavigator } from 'react-navigation';
import { Home } from './ContainerStyles';

var userIdentifier = '12345';

export default class HomeScreen extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      habits: []
    };
  }

  componentWillMount() {
    return fetch('https://habitualdb.herokuapp.com/users/' + userIdentifier + '/habits')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          isLoading: false,
          habits: responseJson,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    const { navigate } = this.props.navigation;
    if (this.state.isLoading) {
      return (
        <View style={{flex: 1, paddingTop: 20}}>
          <ActivityIndicator />
        </View>
      );
    }
    return (
      <View style={Home.container}>
        <Text style={Home.title}>Your Habits</Text>
        <FlatList
          data={this.state.habits}
          // style=(Home.flatList)
          renderItem={({item}) => <Text style={Home.habit}>{item.name}</Text>}
        />
      </View>
    );
  }
}


const SimpleApp = StackNavigator({
  Home: {screen: HabitsList you can pass},
  //these you declare, name, view
  // Page: {screen: SimpleView},
  // HabitShow: {screen: HabitShow}
});

AppRegistry.registerComponent('HabitualFrontEndRN', () => SimpleApp);
