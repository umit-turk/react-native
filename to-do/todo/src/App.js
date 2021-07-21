import React, { useState } from 'react'
import {Text, View, StyleSheet, FlatList} from "react-native";
import FormInput from './components/FormInput/FormInput';
import Header from './components/Header/Header';
import ListItem from './components/ListItem/ListItem';

const App = () => {
  const [todos, setTodos] = useState([
    {text: "buy coffee", key: "1"},
    {text: "create an app", key: "2"},
    {text: "play on the switch", key: "3"},
  ])

  //silmek için
  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.key != key);
    })
  }

  const submitHandler = (text) => {
    setTodos((prevTodos) => {
      return [
        {text: text, key: Math.random().toString()},
        ...prevTodos
      ]
    })
  }
  
  return (
    <View style={styles.container}>
      <Header todos={todos}/>
      <FlatList 
      data={todos}
      renderItem={({item}) => (
        <ListItem item={item} pressHandler={pressHandler}/>
      )}
      />
      <FormInput submitHandler={submitHandler}  />
      
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2f4f4f"
  }
})
