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
import Pie from '../statistics/charts/PieChart'



export default class StatisticsModal extends Component {
  // var arcs = d3.shape.pie()
  state: State;

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

    }
    this._onPieItemSelected = this._onPieItemSelected.bind(this);
  }

  _onPieItemSelected(newIndex){
    this.setState({...this.state, activeIndex: newIndex, spendingsPerYear: data.spendingsPerYear});
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
                onItemSelected={this._onPieItemSelected}
                colors={Theme.colors}
                width={width}
                height={height}
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


