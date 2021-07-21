import React, { useState } from 'react';
import {TouchableOpacity, TextInput, View, Text, } from 'react-native';
import styles from './FormInput.style';

const FormInput = ({submitHandler}) => {
    const [text, setText] = useState('');

  const Separator = () => <View style={styles.separator} />;

  const changeHandler = (val) => {
    setText(val);
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputarea}>
        <TextInput onChangeText={changeHandler} style={styles.input} placeholder="Yapılacaklar..." />
        <Separator />
        <TouchableOpacity onPress={() =>submitHandler(text)} style={styles.button}><Text style={styles.text}>Kaydet</Text></TouchableOpacity>
      </View>
    </View>
  );
};

export default FormInput;
