import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Favorities from './pages/Favorities';
import Products from './pages/Products';

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

function App() {
    return <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="ProductsTab" component={Products} />
        <Drawer.Screen name="FavoritiesTab" component={Favorities} />
      </Drawer.Navigator>
    </NavigationContainer>
  
}

export default App
