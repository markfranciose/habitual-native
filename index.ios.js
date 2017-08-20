import React, { Component } from 'react';
import {
  AppRegistry, Button, StyleSheet,
  Text,
  View
} from 'react-native';

import { StackNavigator } from 'react-navigation'
import HabitView from './app/containers/HabitView'//these views not pushed...
import SimpleView from './app/containers/SimpleView'//were for tests
import Cool from './app/containers/Cool'//this one too

class HabitualFrontEndRN extends Component {
  static navigationOptions = {
    title: 'Habit display',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
      <HabitView />
      <Button
        style={{paddingTop: 100}}
        onPress={() => navigate('Page')}
        title="Cool Pagex"
      />
      <Button
        onPress={() => navigate('Cool')}
        title="Sweet Page"
      />
      <Button
        onPress={() => navigate('Cool')}
        title="Pages AF"
      />
      </View>
    );
  }
}

const SimpleApp = StackNavigator({
  Home: {screen: HabitualFrontEndRN },//these you declare, name, view
  Page: {screen: SimpleView},
  Cool: {screen: Cool}
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


