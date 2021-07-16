import React, {useEffect, useState} from 'react';
import {Button, SafeAreaView, Text, View, FlatList, Switch} from 'react-native';




const App = () => {
 
  const [helloFlag, setHelloFlag] = useState(true)

  function updateFlag()  {
    setHelloFlag(!helloFlag)
  }

  return (
    <SafeAreaView>
      <Text>Hello Lifecycle</Text>
      <Button title="Up!" onPress={updateFlag} />
    {helloFlag && <Hello /> }
    </SafeAreaView>
  );
};

export default App;

function Hello(){

  useEffect(() => {
    console.log("merhaba dünya");
  
    return () => {
      console.log("gidiyorum bütün aşklar yüreğimde")
    }
  }, []);

  return (
    <Text>I'm hello component</Text>
  )
}
