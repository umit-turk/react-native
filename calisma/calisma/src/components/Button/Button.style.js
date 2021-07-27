import {StyleSheet} from 'react-native';

export default {
  primary: StyleSheet.create({
    container: {
      backgroundColor: '#00897b',
      margin: 10,
      height: 50,
      borderRadius: 10,
      justifyContent: 'center',
    },
    title: {
      textAlign: 'center',
      color: 'white',
      fontSize: 20,
      fontWeight: 'bold',
    },
  }),
  secondary: StyleSheet.create({
    container: {
      backgroundColor: 'white',
      margin: 10,
      height: 50,
      borderRadius: 10,
      borderWidth: 1,
      borderColor: '#00897b',
      justifyContent: 'center',
    },
    title: {
      textAlign: 'center',
      color: '#00897b',
      fontSize: 20,
      fontWeight: 'bold',
    },
  }),
};
