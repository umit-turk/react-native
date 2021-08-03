import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styles from './Button.style';

const Button = ({title}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text testID="button-title" style={styles.title}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
