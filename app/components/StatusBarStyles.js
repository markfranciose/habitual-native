import React, {
  Component,
} from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  StatusBar,
  Platform,
} from 'react-native';
import { StatusBarStyles } from '../containers/ContainerStyles';

const MyStatusBar = ({backgroundColor, ...props}) => (
  <View style={[styles.statusBar, { backgroundColor }]}>
    <StatusBar backgroundColor={backgroundColor} {...props} />
  </View>
);

export default class DarkTheme extends Component {
  render() {
    return (
      <View style={ StatusBarStyles.container }>
        <MyStatusBar barStyle="light-content" />
      </View>
    );
  }
}

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;
const APPBAR_HEIGHT = Platform.OS === 'ios' ? 44 : 56;

const styles = StyleSheet.create({
  statusBar: {
    height: STATUSBAR_HEIGHT,
  },
  appBar: {
    backgroundColor:'#79B45D',
    height: APPBAR_HEIGHT,
  },
});

AppRegistry.registerComponent('App', () => DarkTheme);
