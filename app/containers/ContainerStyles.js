import { StyleSheet } from 'react-native';

export const General = StyleSheet.create({
  // Trying to get one central point for all colors.
  colorScheme: {
    backgroundColor: '#358797'
  }
});

export const NewHabit = StyleSheet.create({
  newHabitView: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
  label: {
    marginTop: 20,
    fontSize: 24,
    fontWeight: '600'
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
  button: {
    marginTop: 20,
    width: 240,
    alignItems: 'center',
    backgroundColor: '#2A5F6D',
    borderRadius: 10
  },
  buttonText: {
    padding: 10,
    fontWeight: '600',
    color: 'white'
  },
});

export const Home =
  StyleSheet.create({
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
    createHabitB: {
      width: 240,
      alignItems: 'center',
      backgroundColor: '#F9AA3A',
      // borderWidth: 4,
      // borderColor: 'white',
      borderRadius: 10,
    },
    createHabitT: {
      padding: 20,
      fontSize: 24,
      fontWeight: '700',
      color: 'white'
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
      backgroundColor: '#358797',
      width: 200,
      overflow: 'hidden',
      borderColor: '#47b1c6',
      borderWidth: 1,
      borderRadius: 10,
      padding: 14,
      marginTop: 20,
    },
    deleteText: {
      fontSize: 18,
      color: 'white',
      fontWeight: '700',
      textAlign: 'center',
      backgroundColor: '#D1293F',
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

export const StatusBarStyles = StyleSheet.create({
  container: {
    // flex: 1,
  },
  content: {
    flex: 1,
    backgroundColor: '#33373B',
  },
});

export const Show =
  StyleSheet.create({
    containerStyle: {
        flex: 1,
        padding: 10,
        paddingTop: 20,
        backgroundColor: '#EDEDED',
        alignItems: 'center',
        // justifyContent: 'center'
      },
      habitTitle: {
        fontSize: 36,
        fontWeight: 'bold',
      },
      statistics: {
        marginTop: 5
      },
      reminders: {
        flex: 3,
        // marginTop: 10,
        // backgroundColor: 'green',
        alignItems: 'center',
        width: '100%',
      },
      listView: {
        width: '100%',
      },
      listItems: {
        padding: 5,
        width: '100%',
        alignItems: 'center',
      },
      reminderCard: {
        // textAlign: 'center',
      },
      deleteButton: {
        flex: 1,
      },
      log: {
        width: '100%',
        padding: 5,
        marginBottom: 10,
        textAlign: 'center',
        // backgroundColor: 'pink',
        fontSize: 24,
        fontWeight: '700',
      },
      pieChartCard: {
        flex: 3,
        width: '90%',
        // backgroundColor: 'white',
      }
    });

export const ReminderStyle = StyleSheet.create({
  container: {
    backgroundColor: "white",
    shadowColor: 'black',
    shadowOffset: { width: 5, height: 3 },
    shadowOpacity: 0.125,
    shadowRadius: 2,
    marginBottom: 15,
    padding: 5,
    width: '80%',
  },
  answer: {
    fontSize: 20
  },
  date: {
    fontSize: 10
  }
});

export const ButtonStyles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginBottom: 10
  },
  button: {
    backgroundColor: 'white',
    width: 200,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: 'black',
    shadowOffset: { width: 5, height: 3 },
    shadowOpacity: .2,
    shadowRadius: 2,
  },
  addButton: {
    width: 240,
    height: 75,
    backgroundColor: '#F9AA3A'
  },
  habitButton: {
    backgroundColor: '#358797'
  },
  deleteButton: {
    backgroundColor: '#D1293F'
  },
  text: {
    color: 'white',
    fontSize: 20,
    fontWeight: '700',
  }
});

export default General;
