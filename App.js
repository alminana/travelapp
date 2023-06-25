
import 'react-native-gesture-handler';
import React from 'react';
import Home from './src/screens/Home';
import {  DefaultTheme } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import AttractionDetails from './src/screens/AttractionDetails';
import Gallery from './src/screens/Gallery';

const Stack = createStackNavigator();

const App = () => {
  const appTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: '#ffffff',
    },
  };
  return (
    <NavigationContainer theme={appTheme}>
      <Stack.Navigator screenOptions={{headerShown:false}}>
       <Stack.Screen name='Home' component={Home}/>
       <Stack.Screen name='AttractionDetails' component={AttractionDetails}/>
       <Stack.Screen name='Gallery' component={Gallery}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;
