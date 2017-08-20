import React, {Component} from 'react'
import {View, Text, Button, StyleSheet, AppRegistry} from 'react-native'

import ListContainer from './app/containers/ListContainer'
import DeviceInfo from 'react-native-device-info'
import { StackNavigator } from 'react-navigation'
import HomeScreen from './app/containers/HomeScreen'
import HabitShow from './app/containers/HabitShow'

export default class HabitualFrontEndRN extends Component {
  constructor(props) {
    super(props);
    this.state = {
        user_id: DeviceInfo.getUniqueID()
     };
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
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
  Home: {screen: HabitualFrontEndRN},
  //these you declare, name, view
  Page: {screen: HabitShow},
  Cool: {screen: HomeScreen}
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


      // <View style={styles.container}>

