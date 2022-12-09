import 'react-native-gesture-handler';
import React, { useEffect } from 'react'
import {Text, View, TextInput, StyleSheet, Dimensions, Image,  } from 'react-native'
//import SplashScreen from './src/screens/SplashScreen'
import StackNavigator from './src/navigator/StackNavigator';
import { NavigationContainer } from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen'


const App = () => {
  useEffect(()=> {
  SplashScreen.hide();
  },[])
    return (
        <NavigationContainer>
          <StackNavigator />
        </NavigationContainer>
    )
}

export default App
