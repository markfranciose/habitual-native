import React, { Component } from 'react';
import { Modal, Text, TouchableHighlight, TouchableOpacity, View, Button } from 'react-native';
import { Home } from '../containers/ContainerStyles';

export default class DeleteModal extends Component {

  state = {
    modalVisible: false,
    habitId: this.props.id
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  deleteThisHabit(){
    console.log(this.state.habitId)
    fetch('https://habitualdb.herokuapp.com/users/12345/habits/' + this.state.habitId, {method: 'DELETE'})
  }

  render() {
    return (
      <View>
        <Modal
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {alert("Modal has been closed.")}}
          >
         <View style={{marginTop: 300}}>
          <View>
            <Text>If you delete this habit, your reminders will be removed, and the record of your previous reminders will be deleted.</Text>
            <Button title="Keep Habit" onPress={() => {
              this.setModalVisible(!this.state.modalVisible)
            }}/>
            <Button title="Delete Habit" onPress={() => {
              this.deleteThisHabit()
              this.setModalVisible(!this.state.modalVisible)
            }}/>

          </View>
         </View>
        </Modal>

        <TouchableOpacity onPress={() => {this.setModalVisible(true)} }
          style={Home.listButton} >
          <Text style={Home.deleteText}>Delete</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
