import React from 'react';
import {Text, View} from 'react-native';
import styles from './Login.style';
import Input from '../../../components/Input/Input';
import Button from '../../../components/Button/Button';
import {Formik} from 'formik';
import auth from '@react-native-firebase/auth';
import { showMessage } from "react-native-flash-message";
import authErrorMessageParser from '../../../utils/authErrorMessageParser';

const initialFormValues = {
  usermail: '',
  password: '',
};

const Login = ({navigation}) => {
  function handleSignUp() {
    navigation.navigate('SignPage');
  }

  async function handleFormSubmit(formValues) {
    try {
      await auth().signInWithEmailAndPassword(
        formValues.usermail,
        formValues.password,
      );
    } catch (error) {
      showMessage({
        message: authErrorMessageParser(error.code),
        type: "danger",
      });
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>bana ne?</Text>
      <Formik initialValues={initialFormValues} onSubmit={handleFormSubmit}>
        {({values, handleChange, handleSubmit}) => (
          <>
            <Input
              onType={handleChange('usermail')}
              value={values.usermail}
              placeholder="e-postanızı giriniz"
            />
            <Input
              onType={handleChange('password')}
              value={values.password}
              placeholder="şifrenizi giriniz"
            />
            <Button text="Giriş yap" theme="primary" onPress={handleSubmit} />
          </>
        )}
      </Formik>
      <Button text="Kayıt ol" theme="secondary" onPress={handleSignUp} />
    </View>
  );
};

export default Login;
