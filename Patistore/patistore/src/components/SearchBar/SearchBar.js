import React, { useState } from 'react'
import { Text, View, TextInput } from 'react-native';
import styles from './SearchBar.style'

const SearchBar = () => {
    const [text, onChangeText] = useState("")
    return (
        <View style={styles.container}>
        <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder="Ara..."
        />
        </View>
    )
}

export default SearchBar
