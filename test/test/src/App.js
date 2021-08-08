import React, {useState} from 'react';
import {FlatList, Text, TextInput, View} from 'react-native';
import Button from './components/Button';
import {StyleSheet} from 'react-native';
const App = () => {
  const renderElements = ({item}) => <Text>{item}</Text>;
  const [text, setText] = useState('');
  const [list, setList] = useState([]);

  function addToList() {
    if(!text){
      return;
    }
    setList([...list, text]);
  }

  return (
    <View style={styles.container}>
      <Text>Hello</Text>
      <FlatList
        keyExtractor={(_, i) => i.toString()}
        testID="list"
        data={list}
        renderItem={renderElements}
      />
      <TextInput
        testID="input-area"
        placeholder="Add..."
        onChangeText={setText}
        style={styles.input}
      />
      <Button title="title" onClick={addToList} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
  input: {
    backgroundColor: 'gray',
    margin: 10,
  },
});

export default App;
