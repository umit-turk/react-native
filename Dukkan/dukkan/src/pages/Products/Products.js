import axios from 'axios';
import React, {useState, useEffect} from 'react';
import { Text, View, FlatList, ActivityIndicator } from 'react-native';
import Config from "react-native-config";
import config from '../../../config';
import ProductCard from '../../components/ProductCard/ProductCard';
import useFetch from '../../hooks/useFetch/useFetch';


function Products() {
    const {loading, data, error} = useFetch(config.API_URL);

    const renderProduct = ({item}) => <ProductCard product={item} />

    if(loading){
        return <ActivityIndicator size="large" />
    }
    if(error){
      return  <Text>{error}</Text>
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

export default Products
