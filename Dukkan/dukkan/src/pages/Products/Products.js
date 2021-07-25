import axios from 'axios';
import React, {useState, useEffect} from 'react';
import {Text, View, FlatList, ActivityIndicator, Button} from 'react-native';
import Config from 'react-native-config';
import config from '../../../config';
import Loading from '../../components/Loading';
import ProductCard from '../../components/ProductCard/ProductCard';
import useFetch from '../../hooks/useFetch/useFetch';
import Error from '../../components/Error';
import { useDispatch } from 'react-redux';

function Products({navigation}) {
  const dispatch = useDispatch();
  const {loading, data, error} = useFetch(config.API_PRODUCT_URL);

  const handleProductSelect = (id) => {
    navigation.navigate('DetailPage', {id});
  };

  const renderProduct = ({item}) => (
    <ProductCard product={item} onSelect={() => handleProductSelect(item.id)} />//item.id yi detail sayfasına yolluyoruz.
  );

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }

  return (
    <View>
      <Button title="LogOut" onPress={() => dispatch({type: "SET_USER", payload: {user: null}})} />
      <FlatList data={data} renderItem={renderProduct} />
    </View>
  );
}

export default Products;
