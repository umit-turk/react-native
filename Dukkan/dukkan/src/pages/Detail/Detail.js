import React from 'react';
import { Text, View, Image } from 'react-native';
import config from '../../../config';
import useFetch from '../../hooks/useFetch/useFetch';
import styles from './Detail.style';
import Loading from '../../components/Loading';
import Error from '../../components/Error';

function Detail({route}) {
    const {id} = route.params;
    const {loading, error, data} = useFetch(`${config.API_PRODUCT_URL}/${id}`);
    console.log(id);

    if(loading){
        return <Loading />;
    }

    if(error){
        return <Error />;
    }

    return (
       <View style={styles.container}>
           <Image source={{uri: data.image}} style={styles.image} />
           <View style={styles.body_container}>
           <Text style={styles.title}>{data.title}</Text>
           <Text style={styles.desc}>{data.description}</Text>
           <Text style={styles.price}>{data.price} TL</Text>
           </View>
       </View>
    )
}

export default Detail
