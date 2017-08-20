import HabitButton from './app/components/Button.js'
import Picture from './app/components/Picture'
import HabitTextInput from './app/components/HabitTextInput'
import ListContainer from './app/containers/ListContainer'
import DeviceInfo from 'react-native-device-info'

export default class HabitualFrontEndRN extends Component {
  constructor(props) {
    super(props);
    this.state = {
        user_id: DeviceInfo.getUniqueID()
     };
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <Text>{this.state.user_id}</Text>
    );
  }
}

const SimpleApp = StackNavigator({
  Home: {screen: HabitualFrontEndRN },//these you declare, name, view
  Page: {screen: SimpleView},
  Cool: {screen: Cool}
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: 'white',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('HabitualFrontEndRN', () => SimpleApp);


