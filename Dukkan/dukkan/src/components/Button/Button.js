import React from 'react';
import {View, TouchableOpacity, Text, ActivityIndicator} from 'react-native';
import styles from './Button.style';

function Button({text, onPress, loading}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress} disabled={loading}>
        {loading ? (
          <ActivityIndicator color="white" />
        ) : (
          <Text style={styles.title}>{text}</Text>
        )}
      </TouchableOpacity>
    </View>
  );
}

export default Button;
