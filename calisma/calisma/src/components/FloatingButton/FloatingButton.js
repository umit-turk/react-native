import React from 'react'
import {Text, TouchableOpacity} from 'react-native'
import styles from './FloatingButton.style';


const FloatingButton = ({onPress}) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <Text>tıkla</Text>
        </TouchableOpacity>
    )
}

export default FloatingButton
