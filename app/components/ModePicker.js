import React, {Component} from 'react';
import { View, Text, TouchableOpacity} from 'react-native';
import { NewHabit } from '../containers/ContainerStyles';

export default class ModePicker extends Component {
  _showDaily = () => this.setState({dailyVisible: true, randomVisible: true})
  _showRandom = () => this.setState({dailyVisible: false, randomVisible: true})
  render() {
    console.log(this)
    return (
          <View style={{flexDirection: 'row'}}>
          <TouchableOpacity
            style={NewHabit.lilbutton}
            onPress={this.props.test}>
            <Text style={NewHabit.buttonText}>Random Mode</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={NewHabit.lilbutton}
            onPress={this._showDaily}>
            <Text style={NewHabit.buttonText}>Daily Mode</Text>
          </TouchableOpacity>
        </View>
  )}
}
