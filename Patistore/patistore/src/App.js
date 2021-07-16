import React from "react";
import {Text, View, FlatList} from 'react-native';
import SearchBar from "./components/SearchBar/SearchBar";
import StoreCard from "./components/StoreCard/StoreCard";
import { StyleSheet } from "react-native";
import itemData from './patika_data.json';

const App = () => {
  const renderProducts = ({item}) => <StoreCard products={item} />
  return (
    <View style={styles.container}>
      <Text style={styles.title}>PATIKASTORE</Text>
      <FlatList 
      numColumns={2}
      ListHeaderComponent={() => (<SearchBar/>)}
      keyExtractor={item => item.id.toString()}
      data={itemData}
      renderItem={renderProducts}
      />
    </View>
  )
}



export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
  },
  title:{
    fontWeight: 'bold',
    fontSize: 35,
    textAlign: 'center',
    color: 'purple'
  }
});