import React, {Component} from 'react';
import {Text, TouchableOpacity, View, Button, ActivityIndicator, StyleSheet, AppRegistry, FlatList} from 'react-native';
import { StackNavigator } from 'react-navigation'
import NewHabitContainer from './app/containers/NewHabitContainer'
import HabitShow from './app/containers/HabitShow'
import styles from './app/containers/ContainerStyles';
//import DeviceInfo from 'react-native-device-info';


var userIdentifier = '12345'


export default class HomeScreen extends Component {
  static navigationOptions = {
    // title: 'Test'
    header: null,
    // mode: 'modal',

  }
  constructor() {
    super();
    this.state = {
      //device_id: DeviceInfo.getUniqueID(),
      isLoading: true,
      habits: []
    };
  }

  componentWillMount() {
    console.log(this.state.device_id)
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
    // console.log(navigate)
    if (this.state.isLoading) {
      return (
        <View style={{flex: 1, paddingTop: 20}}>
          <ActivityIndicator />
        </View>
      );
    }
    return (
      <View style={styles.container}>
        <View style={styles.viewTitle}>
          <Text style={styles.appTitle}>Habitual</Text>
        </View>
        <View style={styles.viewButton}>
          <TouchableOpacity onPress={() => navigate('NewHab')}>
            <View style={styles.createHabitB}>
              <Text style={styles.createHabitT}>New Habit</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.viewList}>
          <View style={styles.habitContainer}>
            <Text style={styles.habitsLabel}>Your Habits</Text>
            <FlatList
              style={styles.flatList}
              data={this.state.habits}
              renderItem={({item}) =>
                <TouchableOpacity
                  onPress={()=> navigate('Cool', {id: item.id})}
                  style={styles.listButton}>
                  <Text style={styles.listText}>{item.name}</Text>
                </TouchableOpacity>
              }
            />
          </View>
        </View>
      </View>
    );
  }
}

const SimpleApp = StackNavigator({
  Home: {screen: HomeScreen},
  //these you declare, name, view
  NewHab: {screen: NewHabitContainer},
  Cool: {screen: HabitShow}
});

AppRegistry.registerComponent('HabitualFrontEndRN', () => SimpleApp);

          // renderItem={({item}) => <Button onPress={() => navigate('Cool')} title={item.name} style={styles.habit} />}
