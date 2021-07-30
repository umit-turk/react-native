import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Login from './pages/auth/Login/Login';
import Sign from './pages/auth/Sign/Sign';
import 'react-native-gesture-handler';
import FlashMessage from 'react-native-flash-message';
import Messages from './pages/Messages/Messages';
import auth from '@react-native-firebase/auth';
import {Text, View} from 'react-native';

const Stack = createStackNavigator();

export default () => {
  const [userSession, setUserSession] = useState();

  useEffect(() => {
    auth().onAuthStateChanged(user => {
      setUserSession(!!user);
    });
  }, []);

  const AuthStack = () => {
    return (
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="LoginPage" component={Login} />
        <Stack.Screen name="SignPage" component={Sign} />
      </Stack.Navigator>
    );
  };

  return (
    <NavigationContainer>
      {!userSession ? (
        AuthStack()
      ) : (
        <Stack.Navigator>
          <Stack.Screen
            name="MessagesScreen"
            component={Messages}
            options={{
              headerRight: () => (
                <View>
                  <Text onPress={() => auth().signOut()}>Logout</Text>
                </View>
              ),
            }}
          />
        </Stack.Navigator>
      )}
      <FlashMessage position="top" />
    </NavigationContainer>
  );
};
