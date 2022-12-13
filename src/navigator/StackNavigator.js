import React from 'react'


import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from '../screens/SplashScreen';
import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';

const Stack = createStackNavigator();

const StackNavigator = () => {


    
  return (
    <Stack.Navigator initialRouteName='Signup' >
        {/* <Stack.Screen 
            name="Splash" 
            component={SplashScreen} 
            options={{
                headerShown: false
            }}
        /> */}
        <Stack.Screen 
            name="Login" 
            component={LoginScreen} 
            options={{
            headerShown: false
            }}
        />
         <Stack.Screen 
            name="Signup" 
            component={SignupScreen} 
            options={{
                headerShown: false
            }}
        />
    </Stack.Navigator>
  )
}

export default StackNavigator
