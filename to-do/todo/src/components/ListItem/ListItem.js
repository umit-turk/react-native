import React from 'react';
import { View, Text } from 'react-native';
import styles from './ListItem.style';

const ListItem = ({item, pressHandler}) => {
    return (
        <View>
            <Text onPress={() => pressHandler(item.key)}  style={styles.item}>{item.text}</Text>
        </View>
    )
}

export default ListItem
