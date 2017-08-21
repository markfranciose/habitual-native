import React, { Component } from 'react';
import { FlatList, Text, View } from 'react-native';
import styles from './ComponentStyles';

export default class HabitsList extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Your Habits</Text>
        <FlatList
          data={this.props.habits}

          renderItem={({item}) => <Text style={styles.habit}>{item.name}</Text>}
        />
      </View>
    );
  }
}
