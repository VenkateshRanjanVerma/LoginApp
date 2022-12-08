import React, {useEffect, useLayoutEffect} from 'react'
import {Text, View, TextInput, StyleSheet, Dimensions, Image,  } from 'react-native'


const SplashScreen = ({navigation}) => {

    useEffect(() => {
       

        setTimeout(() => {
            console.log("Splash screeen");

            navigation.navigate('Login')
        }, 5000);
    }, [])


    return (
        <View style={styles.container}>
            <View style={styles.box}>
                <Image 
                    source={require('../../assets/logo_full.png')}  
                    style={{width: 250, height: 100, resizeMode: 'contain'}} 
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    //   height:200,
    
    alignItems: 'center',
      justifyContent: 'center',
    },

    box: {
      height: 200,
      width:200,
      alignItems: 'center',
        justifyContent: 'center',
      }
  });

export default SplashScreen
