import React from 'react';
import {Text, View} from 'react-native';
import styles from './Sign.style';
import Input from '../../../components/Input/Input';
import Button from '../../../components/Button/Button';
import {Formik} from 'formik';
import auth from '@react-native-firebase/auth';
import {showMessage} from 'react-native-flash-message';
import authErrorMessageParser from '../../../utils/authErrorMessageParser';

const initialFormValues = {
  usermail: '',
  password: '',
  repassword: '',
};

const Sign = ({navigation}) => {
  function handleLogin() {
    navigation.goBack();
  }

 async function handleFormSubmit(formValues) {
    if (formValues.password !== formValues.repassword) {
      showMessage({
        message: 'Şifreler uyuşmuyor',
        type: 'danger',
      });
      return;
    }
    try {
     await auth().createUserWithEmailAndPassword(
        formValues.usermail,
        formValues.password,
      );
      navigation.navigate("LoginPage");
      showMessage({
        message: "Kullanıcı oluşturuldu",
        type: 'success',
      });
    } catch (error) {
      showMessage({
        message: authErrorMessageParser(error.code),
        type: "danger",
      })
    }
    console.log(formValues);
  }
  return (
    <View style={styles.container}>
      <Text style={styles.header}>bana ne?</Text>
      <Formik initialValues={initialFormValues} onSubmit={handleFormSubmit}>
        {({values, handleChange, handleSubmit}) => (
          <>
            <Input
              placeholder="e-postanızı giriniz"
              value={values.usermail}
              onType={handleChange('usermail')}
            />
            <Input
              placeholder="şifrenizi giriniz"
              value={values.password}
              onType={handleChange('password')}
            />
            <Input
              placeholder="şifrenizi tekrar giriniz"
              value={values.repassword}
              onType={handleChange('repassword')}
            />
            <Button text="Giriş yap" theme="primary" onPress={handleSubmit} />
          </>
        )}
      </Formik>
      <Button text="Geri" theme="secondary" onPress={handleLogin} />
    </View>
  );
};

export default Sign;
