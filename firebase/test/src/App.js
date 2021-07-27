import React from 'react';
import {Text, View, Button} from 'react-native';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';

function App() {
 /*  const signUp = () => {
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
  } */
  const checkDB = () => {
    const reference = database().ref('books');
    reference.once('value').then(snapshot => {
      const response = snapshot.val();
      console.log(response);
    })
  }
  const listenDB = () => {
    const reference = database().ref('books/');
    reference.on('value', snapshot => {
      console.log(snapshot.val());
    })
  }
  const setDB = () => {
    const reference = database().ref('car/rentable');
    reference.set({
      brand:  "Audi",
      model: "A8",
      price: 128,
    });
  };
  const updateDB = () => {
    const reference = database().ref('car/rentable');

    reference.update({
      model: 'A3',
    })
  }
  const pushDB = () => {
    const reference = database().ref("car/rentable");

    reference.push({
      brand: "Volvo",
      model: "S40",
      price: 100,
    })
  }
  return (
    <View>
      <Text style={{fontSize: 70}}>Hello Firebase</Text>
      {/* <Button title="Sign up" onPress={signUp} />
      <Button title="Sign In" onPress={signIn} />
      <Button title="Sign Out" onPress={signOut} />
      <Button title="Check User" onPress={checkOut} /> */}
      <Button title="Check DB" onPress={checkDB} />
      <Button title="Listen DB" onPress={listenDB} />
      <Button title="Set DB" onPress={setDB} />
      <Button title="Update DB" onPress={updateDB} />
      <Button title="Push DB" onPress={pushDB} />
    </View>
  );
}

export default App;
