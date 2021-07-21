import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Button from '../components/Button';

const Welcome = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Kebap Fitness Salonu</Text>
      <Button text="Üye Kaydı Oluştur" onPress={null} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  header: {
      textAlign: "center",
    fontSize: 30,
    fontWeight: 'bold',
    margin: 10,
  },
});

export default Welcome;
