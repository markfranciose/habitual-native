import { StyleSheet } from 'react-native';

export default StyleSheet.create({
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
  buttonText: {
    padding: 10,
    fontWeight: '600',
    color: 'white'
  },
  newHabitView: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  }
});