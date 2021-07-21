import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import First from './pages/First';
import Second from './pages/Second';

const Stack = createStackNavigator();

function App(){
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen  name="FirstScreen" component={First} />
        <Stack.Screen name="SecondScreen" component={Second} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default App
