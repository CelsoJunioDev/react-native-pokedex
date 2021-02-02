import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Home from './src/pages/Home'
import Main from './src/pages/Main'
import PokeDetails from './src/pages/PokeDetails'
import PokeDetailsTest from './src/pages/PokeDetailsTest'
import TestCharts from './src/pages/Testes/Charts'

const App = () => {
  const Stack = createStackNavigator()
  
  return (
    <NavigationContainer>

<Stack.Navigator screenOptions={{headerShown: false}} initialRouteName='Main'>
<Stack.Screen name='TestCharts' component={TestCharts}/>
<Stack.Screen name='PokeDetailsTest' component={PokeDetailsTest}/>
<Stack.Screen name='Home' component={Home}/>
  <Stack.Screen name='Main' component={Main}  />
  <Stack.Screen name='PokeDetails' component={PokeDetails}/>
  
</Stack.Navigator>
       

    </NavigationContainer>
   
  )
}

export default App

const styles = StyleSheet.create({})
