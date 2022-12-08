import React from 'react'
import {Text, View, TextInput, StyleSheet, Dimensions, Image, Touchable, showPass } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'


const HeaderLogo = ({navigation}) => {
    return (
        //  <View>
        //      <TouchableOpacity 
        //         onPress={() => {navigation.navigate('Signup')}}
        //     style={{height: 100, width: 200, backgroundColor: 'red'}} >
        //         <Text>fdsfdsfd</Text>
        //     </TouchableOpacity> 


            
        //  </View> 


        <View style={styles.box}>
          
                <Image 
                    source={require('../../assets/logo_full.png')}  
                    style={{width: 250, marginTop: 0, height: 100,resizeMode: 'contain'}} 
                />

               
                
         
        </View>
    )
}


const styles = StyleSheet.create({
   box: {
      //flex: 1,
    height:150,
    
    //  alignItems: 'center',
      // justifyContent: 'center',
      backgroundColor:'white',
     // borderColor:'red',
    //  borderWidth:21,
// borderRadius:80,

borderBottomRightRadius:200,
borderBottomLeftRadius:200,
     alignItems: 'center',
     // justifyContent: 'center',
     

    
     
    },

    header : {
      fontSize: 14,
      fontWeight: '',
      color: 'white',
    },
  });

export default HeaderLogo
