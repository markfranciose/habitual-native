import React, {Component} from 'react';
import {Text, View, ActivityIndicator} from 'react-native';
import HabitsList from '../components/HabitsList'
import { StackNavigator } from 'react-navigation'


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
      <View style={styles.container}>
        <Text style={styles.title}>Your Habits</Text>
        <FlatList
          data={this.state.habits}
          // style=(styles.flatList)
          renderItem={({item}) => <Text style={styles.habit}>{item.name}</Text>}
        />
      </View>
    );
  }
}


const SimpleApp = StackNavigator({
  Home: {screen: HabitsList you can pass},
  //these you declare, name, view
  // Page: {screen: SimpleView},
  // Cool: {screen: Cool}
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'pink',
  },
  flatList: {
    background: 'pink',
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
