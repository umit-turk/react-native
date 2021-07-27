import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import styles from './Button.style';

const Button = ({text, theme = "primary", onPress} ) => {
  
  return ( 
      <TouchableOpacity style={styles[theme].container} onPress={onPress}>
  
        <Text style={styles.title}>{text}</Text>

        </TouchableOpacity>
    
  );
};

export default Button;
