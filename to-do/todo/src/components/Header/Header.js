import React from 'react';
import {View, Text} from 'react-native';
import styles from './Header.style';

const Header = ({todos}) => {
  return (
    <View style={styles.container}>
      <View style={styles.infoarea}>
        <Text style={styles.heading}>Yapılacaklar</Text>
        <Text style={styles.count}>{todos.length}</Text>
      </View>
    </View>
  );
};

export default Header;
