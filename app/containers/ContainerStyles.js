import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  header: {
    // marginTop: 10,
    backgroundColor: '#358797'
  },
  headerTitle: {
    color: 'white',
    fontWeight: '700',
  },
  container: {
    flex: 1,
    backgroundColor: '#EDEDED',
    paddingTop: 35,
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewTitle: {
    marginTop: 25,
    flex: 1,
    justifyContent: 'center',
  },
  viewButton: {
    flex: 1,
    justifyContent: 'center',
  },
  viewList: {
    flex: 4,
    flexDirection: 'row',
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
    backgroundColor: '#2A5F6D',
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
    alignItems: 'center',
    flex: 1
  },
  habitContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    // paddingBottom: 20,
  },
  listButton: {
    alignItems: 'center',
  },
  listText: {
    fontSize: 18,
    color: 'white',
    fontWeight: '700',
    textAlign: 'center',
    // justifyContent: 'center',
    backgroundColor: '#358797',
    width: 200,
    overflow: 'hidden',
    borderColor: '#47b1c6',
    borderWidth: 1,
    borderRadius: 10,
    padding: 14,
    marginTop: 20,
  },
  habitsLabel: {
    // flex: 1,
    // flexDirection: 'column',
    backgroundColor: '#358797',
    textAlign: 'center',
    borderColor: '#47b1c6',
    // borderBottomColor: '#bbb',
    // borderBottomWidth: 4,
    borderWidth: 1,
    // width: 240,
    padding: 10,
    color: 'white',
    fontSize: 24,
    fontWeight: '600'
  },
  flatList: {
    // flex: 6,
    // width: 240,
    backgroundColor: '#2A5F6D',
    paddingBottom: 200
  },
});