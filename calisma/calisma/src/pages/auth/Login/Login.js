import React from 'react';
import {View} from 'react-native';
import styles from './Login.style';
import Input from '../../../components/Input/Input';
import Button from '../../../components/Button/Button';
const Login = () => {
  return (
    <View style={styles.container}>
      <Input placeholder="e-postanızı giriniz" />
      <Input placeholder="şifrenizi giriniz" />
      <Button text="Giriş yap" theme="primary"/>
      <Button text="Kayıt ol" theme="secondary" />
      <Button text="Kayıt ol" />
      <Button text="Kayıt ol"  />
    </View>
  );
};

export default Login;
