import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    alignItems: 'stretch'
  },
  title: {
    textAlign: 'center',
    marginTop: 22,
    fontSize: 19,
    fontWeight: 'bold',
  },
  activeTitle: {
    color: 'red',
  },
  habit: {
    color: 'blue',
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
    marginTop: 2,
    textAlign: 'center',
    height: 50,
  },
});