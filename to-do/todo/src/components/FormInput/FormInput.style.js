import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {},
  input: {
    height: 40,
    paddingLeft:10,
    display: "flex",
    
    
  },
  inputarea: {
    backgroundColor: '#c0c0c0',
    height: 115,
    borderRadius: 10,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 30,
  },
  separator: {
    borderWidth: 1,
    borderBottomColor: '#778899',
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginLeft: 10,
    marginRight: 10,
  },
  button:{
      alignItems: "center",
      height: 35,
      backgroundColor: "#a9a9a9",
      marginTop: 15,
      marginLeft:20,
      marginRight: 20,
      marginBottom: 25,
      borderRadius: 10,
      justifyContent: "center",
  },
  text:{
      color: "white",
  }
});
