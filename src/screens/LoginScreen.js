import React, {useState} from 'react';

import {Text, View, TextInput, StyleSheet,Modal, Dimensions,Pressable, Image, Touchable, showPass } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import HeaderLogo from './HeaderLogo'



const LoginScreen = ({navigation}) => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [modalVisible, setModalVisible] = useState(false);
    const [error, setError] = useState();
  
    const validateLogin = () => 
    {

    if (username == 'test@gmail.com' && password == 'pass1234') 
    {
        navigation.navigate('Signup');  
    } 
    else
     if (username =='' || password =='') 
      {
        setError('Username cannot be blank');
      } 
      else
       {
        setModalVisible(true);
      }
    };
  



    return (
        <View style={{ alignItems: 'center', height: '1000%',backgroundColor: '#438AB6', top: -795,}}>
          
          <View style={styles.headerBox}>
            <Image style={{resizeMode: 'contain', width: 200}}
              source={require('../../assets/logo_full.png')}
            />
          </View>
          <TextInput placeholder={"Enter the user Email"}
            style={styles.input}
            onChangeText={username => {
              setUsername(username);
            }}
          />
          <Text style={{ color: 'white', fontSize: 20,}}>Username</Text>
          <TextInput placeholder={"Enter the Password"}
            secureTextEntry={true}
            style={styles.input}
            onChangeText={password => {
              setPassword(password);
            }}
          />


          <Text style={{ color: 'white', fontSize: 20,}}>Password</Text>
          <Text style={{color: 'red',fontSize: 25,}}>{error}</Text>
          <TouchableOpacity style={styles.button} onPress={validateLogin}>
            <Text style={{color: 'white',fontSize: 15,fontWeight: 'bold'}}>LOGIN</Text>
          </TouchableOpacity>

          <Modal
            transparent={true}
            visible={modalVisible}
            >


            <View style={{  flex: 1,alignItems: 'center',marginTop: 22,justifyContent: 'center',}}>
              <View style={styles.modalView}>
                <Text style={{  marginBottom: 15, textAlign: 'center',color: 'red'}}>Incorrect Username/Password</Text>
                <Pressable
                  style={[styles.modalbutton, styles.buttonClose]}
                  onPress={() => setModalVisible(!modalVisible)}>
                  <Text style={styles.textStyle}>Try again</Text>
                </Pressable>
              </View>
            </View>
          </Modal>

        </View>
      );
    };
    
    const styles = StyleSheet.create({

      headerBox: {
        backgroundColor: 'white',
        width: 1000,
        height: 1000,
        borderRadius: 500,
        alignItems: 'center',
        marginBottom: 45,
        justifyContent: 'flex-end',
      },
      modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 5,
        padding: 35,
        alignItems: 'center',
        elevation: 5,
      },
      modalbutton: {
        borderRadius: 5,
        padding: 10,
        paddingHorizontal: 20,
        elevation: 2,
      },
       buttonOpen: {
         backgroundColor: '#F194FF',
        },

        buttonClose: {
        backgroundColor: '#2196F3',
        },
      textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
      },
   
      input: {
        marginTop:40,
        height: 40,
        width: '78%',
        borderRadius:5,
        backgroundColor: 'white',
        margin: 12,
        borderWidth: 1,
        padding: 10,
        fontSize: 20,
      },
      button: {
        justifyContent: 'center',
        alignItems: 'center',
        borderColor:'white',
        width: 300,
        height: 50,
        backgroundColor: '#2E7D32',
        borderRadius: 45,
        margin: 25,
        borderWidth:1,
       
      },
    
      
    });
    

export default LoginScreen









