import React from 'react';
import {Text, View, Button} from 'react-native';
import auth from '@react-native-firebase/auth';

function App() {
  const signUp = () => {
    auth().createUserWithEmailAndPassword(
      'jane.doe@example.com',
      'SuperSecretPassword!',
    )
    .then(res => console.log(res))
    .catch(err => console.log(err));
  };

  const signIn = () => {
    auth().signInWithEmailAndPassword(
      'jane.doe@example.com',
      'SuperSecretPassword!',
    )
    .then(res => console.log("giriş yapıldı"))
    .catch(err => console.log(err));
  }
  const signOut = () => {
    auth().signOut()
    .then(res => console.log("çıkış yapıldı"))
    .catch(err => console.log(err));
  }
  const checkOut = () => {
    const user = auth().currentUser;
    console.log(user);
  }
  return (
    <View>
      <Text style={{fontSize: 70}}>Hello Firebase</Text>
      <Button title="Sign up" onPress={signUp} />
      <Button title="Sign In" onPress={signIn} />
      <Button title="Sign Out" onPress={signOut} />
      <Button title="Check User" onPress={checkOut} />
    </View>
  );
}

export default App;
