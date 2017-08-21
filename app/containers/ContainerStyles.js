import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    // flexDirection: 'column',
    // width: 280,
    backgroundColor: '#EDEDED',
    paddingTop: 35,
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewTitle: {
    marginTop: 25,
    flex: 2,
    justifyContent: 'center',
    // flexDirection: 'row',
    // flex: 1
  },
  viewButton: {
    flex: 2,
    justifyContent: 'center',
    // flexDirection: 'row',
    // flex: 1
  },
  viewList: {
    // backgroundColor: 'darkseagreen',
    // width: 100%,
    flex: 5
  },
  appTitle: {
    fontSize: 48,
    color: '#358797',
    fontWeight: '800',
    // width: 280,
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
    width: 240,
    alignItems: 'center',
    backgroundColor: '#F9AA3A',
    // borderWidth: 4,
    // borderColor: 'white',
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
    fontWeight: '700',
    color: 'white'
  },
  newHabitView: {
    justifyContent: 'center',
    width: 240,
    alignItems: 'center',
    flex: 1
  },
  listButton: {
    alignItems: 'center',
    // fontSize:
    // width: 200,
    // backgroundColor: '#9e1f36',
  },
  listText: {
    fontSize: 14,
    color: 'white',
    fontWeight: '700',
    textAlign: 'center',
    justifyContent: 'center',
    backgroundColor: '#358797',
    width: 200,
    borderColor: 'white',
    borderWidth: 4,
    borderRadius: 10,
    padding: 10,
    marginVertical: 10,
  },
  habitsLabel: {
    backgroundColor: '#358797',
    textAlign: 'center',
    // borderBottomColor: 'white',
    // borderBottomColor: '#bbb',
    // borderBottomWidth: 4,
    // borderWidth: 4
    width: 240,
    padding: 10,
    color: 'white',
    fontSize: 18,
    fontWeight: '600'
  },
  flatList: {
    // width: 240,
    backgroundColor: '#2A5F6D',
  },
});