import React, {
  Component,
  PropTypes,
} from 'react';
import {
  Modal,
  ART,
  LayoutAnimation,
  Dimensions,
  StyleSheet,
  ListView,
  View,
  TouchableHighlight,
  Button,
  Text,
  TouchableWithoutFeedback,
} from 'react-native';
import Theme from '../statistics/theme/colors';
import Pie from '../statistics/charts/PieChart'



export default class StatisticsModal extends Component {
  // var arcs = d3.shape.pie()

  constructor(props) {
    super(props);
    this.state = {
      habitId: this.props.id,
      isLoading: true,
      habitStats: this.props.habitStats
      habitName: this.props.habitName
      activeIndex: 0,
      // spendingsPerYear: data.spendingsPerYear,
      // replaced by data instantiated by fetch
    }
    this._onReminderItemSelected = this._onReminderItemSelected.bind(this);
  }

  _onReminderItemSelected(newIndex){
    this.setState({...this.state, activeIndex: newIndex});
  }

  componentWillMount(){
    return fetch('https://habitualdb.herokuapp.com/users/12345/habits/'+ this.state.habitId)
    .then((response) => response.json())
    .then((responseJson) => {
      this.setState({
        habitName: responseJson.name,
        habitStats: responseJson.stats,

        isLoading: false,
        // dataSource: ds.cloneWithRows(responseJson.reminders),
      }, function() {
        console.log(this.state.habitStats)
        // do something with new state
      });
    })
    .catch((error) => {
      console.error(error);
    });
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  render() {
    const height = 200;
    const width = 500;
    return (
      <View>
        <Pie
          pieWidth={150}
          pieHeight={150}
          onItemSelected={this._onReminderItemSelected}
          colors={Theme.colors}
          width={width}
          height={height}
          // data={this.state.habitStats} />
          data={data.spendingsLastMonth} />
      </View>
    );
  }
}

const data = {
  spendingsLastMonth: [
    {"number":  42, "name": 'Yes'},
    {"number": 58, "name": 'No'}
  ],
};