import React from 'react';
import {View, FlatList, Text} from 'react-native';
import Config from 'react-native-config';
import config from '../../../config';
import Loading from '../../components/Loading';
import ProductCard from '../../components/ProductCard/ProductCard';
import useFetch from '../../hooks/useFetch/useFetch';
import Error from '../../components/Error';
import { useSelector } from 'react-redux';

function Products({navigation}) {
  const {loading, data, error} = useFetch(config.API_PRODUCT_URL);
  const user = useSelector(s => s.user);

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
      <Text>Hello: {user.name.firstname}</Text>
      <FlatList data={data} renderItem={renderProduct} />
    </View>
  );
}

export default Products;
