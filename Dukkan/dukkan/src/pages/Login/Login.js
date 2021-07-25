import React from 'react';
import {SafeAreaView, View, Image, Alert} from 'react-native';
import Button from '../../components/Button/Button';
import Input from '../../components/Input';
import styles from './Login.style';
import {Formik} from 'formik';
import usePost from '../../hooks/usePost';
import Config from 'react-native-config';
import config from '../../../config';

function Login({navigation}) {
  const {data, post, loading, error} = usePost();

  function handleLogin(values) {
    post(config.API_AUTH_URL + '/login', values);
  }

  if (error) {
    Alert.alert('Dükkan', 'Bir hata oluştu!');
  }

  if (data) {
    if (data.status === 'Error') {
      Alert.alert('Dükkan', 'Kullanıcı bulunamadı.');
    } else {
      navigation.navigate("ProductsPage")
    }
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logo_container}>
        <Image
          style={styles.logo}
          source={require('../../assets/login-logo.png')}
        />
      </View>
      <Formik
        initialValues={{username: '', password: ''}}
        onSubmit={handleLogin}>
        {({handleChange, handleSubmit, values}) => (
          <View style={styles.body_container}>
            <Input
              placeholder="Kullanıcı adını giriniz..."
              value={values.username}
              onType={handleChange('username')}
              iconName="account"
            />
            <Input
              placeholder="Şifrenizi giriniz..."
              value={values.password}
              onType={handleChange('password')}
              iconName="key"
              isSecure
            />
            <Button text="Giriş Yap" onPress={handleSubmit} loading={loading} />
          </View>
        )}
      </Formik>
    </SafeAreaView>
  );
}

export default Login;
