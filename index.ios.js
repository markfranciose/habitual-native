import React, {Component} from 'react';
import {Text, View, Button, ActivityIndicator, StyleSheet, AppRegistry, FlatList} from 'react-native';
import { StackNavigator } from 'react-navigation'
import NewHabitContainer from './app/containers/NewHabitContainer'
import HabitShow from './app/containers/HabitShow'


var userIdentifier = '12345'


export default class HomeScreen extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      habits: []
    };
  }

  componentWillMount() {
    return fetch('http://localhost:3000/users/' + userIdentifier + '/habits')
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
      <View style={styles.container}>
        <Text style={styles.title}>Your Habits</Text>
        <FlatList
          data={this.state.habits}

          renderItem={({item}) => <Button onPress={() => navigate('Cool', {id: item.id})} title={item.name} style={styles.habit} />}
        />
      </View>
    );
  }
}


const SimpleApp = StackNavigator({
  Home: {screen: HomeScreen},
  //these you declare, name, view
  // Page: {screen: SimpleView},
  Cool: {screen: HabitShow}
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: 'white',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('HabitualFrontEndRN', () => SimpleApp);

          // renderItem={({item}) => <Button onPress={() => navigate('Cool')} title={item.name} style={styles.habit} />}
