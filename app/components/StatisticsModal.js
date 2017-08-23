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
      modalVisible: false,
      habitId: this.props.id,
      isLoading: true,
      habitStats: '',
      habitName: "",
      activeIndex: 0,
      spendingsPerYear: data.spendingsPerYear,
      // replaced by data instantiated by fetch
    }
    this._onReminderItemSelected = this._onReminderItemSelected.bind(this);
  }

  _onReminderItemSelected(newIndex){
    this.setState({...this.state, activeIndex: newIndex, spendingsPerYear: this._shuffle(data.spendingsPerYear)});
  }

  _shuffle(a) {
    for (let i = a.length; i; i--) {
        let j = Math.floor(Math.random() * i);
        [a[i - 1], a[j]] = [a[j], a[i - 1]];
    }
    return a;
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
      <View style={{marginTop: 22}}>
        <Modal
          animationType={"fade"}
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {alert("Modal has been closed.")}}
          >
          <View style={{marginTop: 300}}>
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

              <Button title="Close" onPress={() => {
                this.setModalVisible(!this.state.modalVisible)
              }}/>
            </View>
          </View>
        </Modal>
        <Button title="Open Modal" onPress={() => {
          this.setModalVisible(true)
        }}/>
      </View>
    );
  }
}

const data = {

  spendingsPerYear: [
    {year: 2016, value: 3.24},
    {year: 2015, value: 3.24},
    {year: 2014, value: 10.35},
    {year: 2013, value: 10.84},
    {year: 2012, value: 9.92},
    {year: 2011, value: 65.80},
    {year: 2010, value: 19.47},
    {year: 2009, value: 30.24},
    {year: 2008, value: 10.35},
    {year: 2007, value: 10.84},
    {year: 2006, value: 19.92},
    {year: 2005, value: 80.80},
    {year: 2004, value: 19.47},
    {year: 2003, value: 34.24},
    {year: 2001, value: 65.35},
    {year: 2000, value: 45.84},
    {year: 1999, value: 60.92},
    {year: 1998, value: 21.80},
    {year: 1997, value: 19.47},
    {year: 1996, value: 3.24},
    {year: 1995, value: 10.35},
    {year: 1994, value: 20.84},
    {year: 1993, value: 60.92},
    {year: 1992, value: 80.80},
  ],

  spendingsLastMonth: [
    {"number":  8, "name": 'Fun activities'},
    {"number": 7, "name": 'Dog'},
    {"number": 16, "name": 'Food'},
    {"number": 23, "name": 'Car'},
    {"number": 42, "name": 'Rent'},
    {"number":  4, "name": 'Misc'},
  ],
};