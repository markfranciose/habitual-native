import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    // flexDirection: 'row',
    padding: 50,
    // height: 50,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  flatList: {
    // backgroundColor: 'pink',
    // height: 10,
    borderColor: 'lightgray',
    borderRadius: 10,
    borderWidth: 6,
    padding: 40,
    // marginVertical: 10,
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
  inputBox: {
    marginTop: 20,
    flex: .05,
    width: 240,
    fontWeight: '600',
    textAlign: 'center',
    borderColor: 'lightgray',
    borderWidth: 2,
    padding: 10,
    borderRadius: 10
  },
  label: {
    marginTop: 20,
    fontSize: 24,
    fontWeight: '600'
  },
  button: {
    marginTop: 20,
    width: 240,
    alignItems: 'center',
    backgroundColor: 'darkseagreen',
    borderRadius: 10
  },
  createHabitB: {
    // marginVertical: 20,
    // marginTop: 100,
    width: 240,
    alignItems: 'center',
    backgroundColor: 'darkcyan',
    borderRadius: 10,
  },
  buttonText: {
    padding: 10,
    fontWeight: '600',
    color: 'white'
  },
  createHabitT: {
    padding: 20,
    fontSize: 24,
    fontWeight: '400',
    color: 'white'
  },
  newHabitView: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
  listItems: {
    color: 'darkcyan'
  }
});