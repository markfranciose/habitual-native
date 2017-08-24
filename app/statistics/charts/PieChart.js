// @flow
'use strict';

import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ART,
  LayoutAnimation,
  Dimensions,
  TouchableWithoutFeedback,
} from 'react-native';

const {
  Surface,
  Group,
  Rectangle,
  Shape,
} = ART;

import * as scale from 'd3-scale';
import * as shape from 'd3-shape';
import * as d3Array from 'd3-array';
import AnimShape from '../art/AnimatedVisual';
import Theme from '../theme/colors';

const d3 = {
  scale,
  shape,
};

import {
    scaleBand,
    scaleLinear
} from 'd3-scale';

type Props = {
  height: number,
  width: number,
  pieWidth: number,
  pieHeight: number,
  colors: any,
  onItemSelected: any
};

type State = {
  highlightedIndex: number,
};

class Pie extends React.Component {

  state: State;

  constructor(props: Props) {
    super(props);
    this.state = { highlightedIndex: null };
    this._createPieChart = this._createPieChart.bind(this);
    this._value = this._value.bind(this);
    this._label = this._label.bind(this);
    this._color = this._color.bind(this);
    this._onPieItemSelected = this._onPieItemSelected.bind(this);
  }

  // methods used to tranform data into piechart:
  // TODO: Expose them as part of the interface
  _value(item) { return item.number; }

  _label(item) { return item.name; }

  _color(index) { return Theme.colors[index]; }

  _createPieChart(index) {

    var arcs = d3.shape.pie()
        .value(this._value)
        (this.props.data);

    var hightlightedArc = d3.shape.arc()
      .outerRadius(this.props.pieWidth/2 + 10)
      .padAngle(.05)
      .innerRadius(30);

    var arc = d3.shape.arc()
      .outerRadius(this.props.pieWidth/2)
      .padAngle(.05)
      .innerRadius(30);

    var arcData = arcs[index];
    var path = (this.state.highlightedIndex == index) ? hightlightedArc(arcData) : arc(arcData);

     return {
       path,
       color: this._color(index),
     };
  }

  _onPieItemSelected(index) {
    this.setState({...this.state, highlightedIndex: index});
    this.props.onItemSelected(index);
  }


  render() {
    const margin = styles.pieContainer.margin
    const x = this.props.pieWidth / 2 + margin;
    const y = this.props.pieHeight / 2 + margin;

    return (
      <View
        width={this.props.width}
        height={this.props.height}
        style={styles.habitView}
      >
        <Surface
          width={this.props.width}
          height={this.props.height}
          style={styles.surface}
        >
           <Group x={x} y={y} style={{alignItems: 'center'}}>
           {
              this.props.data.map( (item, index) =>
              (<AnimShape
                 key={'pie_shape_' + index}
                 color={this._color(index)}
                 d={ () => this._createPieChart(index)}
              />)
              )
            }
           </Group>
        </Surface>
        <View style={{
          flex: 1,
          position: 'absolute',
          // bottom:margin,
          top: margin * 1.5,
          width: '100%',
          // justifyContent: 'center',
          // backgroundColor: 'pink',
          left: 2.75*margin + this.props.pieWidth
        }}>
          {
            this.props.data.map( (item, index) =>
            {
              var fontWeight = this.state.highlightedIndex == index ? 'bold' : 'normal';
              return (
                <TouchableWithoutFeedback key={index} onPress={() => this._onPieItemSelected(index)}>
                  <View>
                    <Text style={[styles.pieButtonLabel, {backgroundColor: this._color(index), fontWeight: fontWeight}]}>{this._label(item)}: {this._value(item)}%</Text>
                  </View>
                </TouchableWithoutFeedback>
              );
            })
          }
        </View>
      </View>
    );
  }
}

const styles = {
  pieContainer: {
    margin: 20,
  },
  habitView: {
    backgroundColor: 'white',
    // alignItems: 'center',
  },
  pieButtonLabel: {
    margin: 6,
    padding: 8,
    color: 'white',
    fontSize: 18,
    width: '35%',
    fontWeight: '700',
  },
  surface: {
    alignItems: 'center',
    shadowColor: 'black',
    shadowOffset: { width: 5, height: 3 },
    shadowOpacity: .2,
    shadowRadius: 2,
  },

};

export default Pie;