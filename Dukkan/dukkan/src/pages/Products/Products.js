import axios from 'axios';
import React, {useState, useEffect} from 'react';
import {Text, View, FlatList, ActivityIndicator} from 'react-native';
import Config from 'react-native-config';
import config from '../../../config';
import Loading from '../../components/Loading';
import ProductCard from '../../components/ProductCard/ProductCard';
import useFetch from '../../hooks/useFetch/useFetch';
import Error from '../../components/Error';
function Products() {
  const {loading, data, error} = useFetch(config.API_URL);

  const renderProduct = ({item}) => <ProductCard product={item} />;

  if(loading){
      return <Loading />;
    }
    if(error){
      return  <Error />;
    }

    return (
        <View>
            <FlatList 
            data={data}
            renderItem={renderProduct}
            />
        </View>
    )
}

export default Products;
