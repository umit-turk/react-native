import React from 'react';
import {Text, View} from 'react-native';
import styles from './Sign.style';
import Input from '../../../components/Input/Input';
import Button from '../../../components/Button/Button';
import {Formik} from 'formik';

const initialFormValues = {
  usermail: '',
  password: '',
  repassword: '',
};

const Sign = ({navigation}) => {
  function handleLogin() {
    navigation.goBack();
  }

  function handleFormSubmit(formValues){
    console.log(formValues)
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
