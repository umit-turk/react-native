import React, {useState} from 'react';
import {Button, SafeAreaView, Text, View, FlatList, Switch} from 'react-native';

const data = [
  {id: 0, name: 'cafe.exe', isFavorite: true},
  {id: 1, name: 'KafaKafe', isFavorite: false},
  {id: 2, name: "Rock'n Code", isFavorite: true},
  {id: 3, name: 'do(drink)', isFavorite: false},
  {id: 4, name: 'BugG', isFavorite: true},
  {id: 5, name: 'esc', isFavorite: false},
];

const App = () => {
  const [cafeList, setCafeList] = useState(data);
  const [showOnlyFavorities, setShowOnlyFavorities] = useState(false);

  function onFavoritesChange(isFavoriteSelected) {
    setShowOnlyFavorities(isFavoriteSelected);
    isFavoriteSelected
      ? setCafeList(cafeList.filter(cafe => cafe.isFavorite))
      : setCafeList(data);
  }

  return (
    <SafeAreaView>
      <View>
        <Text>Show only favorities</Text>
        <Switch value={showOnlyFavorities} onValueChange={onFavoritesChange} />
      </View>
      <FlatList
        data={cafeList}
        renderItem={({item}) => <Text>{item.name}</Text>}
      />
    </SafeAreaView>
  );
};

export default App;
