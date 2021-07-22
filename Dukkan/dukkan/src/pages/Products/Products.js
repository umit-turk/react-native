import axios from 'axios';
import React, {useState, useEffect} from 'react';
import { Text, View, FlatList } from 'react-native';
import Config from "react-native-config";
import config from '../../../config';
import ProductCard from '../../components/ProductCard/ProductCard';


function Products() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
       const {data: productData} = await axios.get(config.API_URL);
       setData(productData);
    }

    const renderProduct = ({item}) => <ProductCard product={item} />

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
