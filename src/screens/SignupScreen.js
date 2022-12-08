import React from 'react'
import {Text, View, TextInput, StyleSheet, Dimensions, Image, Touchable,  } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'


const SignupScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
                <Text style={{fontSize: 40,color:'#64B5F6'}}>Welcome to Dashboard</Text>
        
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
       flex: 1,
  
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: 15,
      paddingBottom: 12,
      backgroundColor: "white",


      fontSize: 50,
    fontWeight: 'bold',
    color: 'black',
    },

    // box: {
    //   height: 200,
    //   width:200,
    //   alignItems: 'center',
    //     justifyContent: 'center',
    //   }
  });
export default SignupScreen
