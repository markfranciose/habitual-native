import React, { Component } from 'react';
import { View, Text } from 'react-native';

class YesNo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <Button onPress={onPressLearnMore}
          title="yes"
          color="#550000"
          accessibilityLabel="Yes" />
        <Button onPress={onPressLearnMore}
          title="no"
          color="#76B75B"
          accessibilityLabel="No" />
      </View>
    );
  };
}

export default YesNo;
