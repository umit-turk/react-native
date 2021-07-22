import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

import Member from './pages/member/Member';
import MemberDetail from './pages/member/MemberDetail';
import MemberUpdate from './pages/member/MemberUpdate';

import Profile from './pages/profile/Profile';
import ProfileEdit from './pages/profile/ProfileEdit';

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const MemberStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="MemberScreen" component={Member} />
      <Stack.Screen name="MemberDetailScreen" component={MemberDetail} />
      <Stack.Screen name="MemberUpdateScreen" component={MemberUpdate} />
    </Stack.Navigator>
  )
}

const ProfileStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ProfileScreen" component={Profile} />
      <Stack.Screen name="ProfileEditScreen" component={ProfileEdit} />
    </Stack.Navigator>
  )
}

function App() {
    return <NavigationContainer>
      <Drawer.Navigator initialRouteName="Member">
        <Drawer.Screen name="Member" component={MemberStack} />
        <Drawer.Screen name="Profile" component={ProfileStack} />
      </Drawer.Navigator>
    </NavigationContainer>
  
}

export default App
