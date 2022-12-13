import React, {useState} from 'react'
import {Text, View, TextInput, StyleSheet, Modal, Dimensions,Alert,Image, Touchable, Pressable  } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import MapView, {Marker} from 'react-native-maps';

const SignupScreen = ({navigation}) => {

  const [modalVisible, setModalVisible] = useState(false);
  const [modalData, setModalData] = useState({});



  const Locations = [
    {
      title: 'Physician-1',
      description: '21 tickets pending',
      latitude: 37.78825,
		longitude: -122.4324,
		latitudeDelta: 0.015,
		longitudeDelta: 0.0121,
    },
    {
      title: 'Physician-2',
      description: "All the tickets are resolved, and documents signed",
	  latitude: 37.78830,
	  longitude: -122.4324,
	  latitudeDelta: 0.015,
	  longitudeDelta: 0.0121,
    },
  ];

  const showModal = (title, description) => {
    setModalData({title: title, description: description});
    setModalVisible(true);
  };


    return (
        <View style={styles.containerbox}>


        <Modal
              animationType="slide"
              transparent={true}
              visible={modalVisible}
              >
              <View style={styles.centeredView}>
                <View style={styles.modalView}>
                  <Text style={styles.modalText}>{modalData.title}</Text>
                  <Text>{modalData.description}</Text>
                  <Pressable
                    style={[styles.modalbutton, styles.buttonClose]}
                    onPress={() => setModalVisible(!modalVisible)}>
                    <Text style={styles.textStyle}>Close</Text>
                  </Pressable>
                </View>
              </View>
            </Modal>
                <Text style={{fontSize: 40,color:'#64B5F6'}}>Welcome to Dashboard</Text>



              <View style={{ height: 500, width: '100%'}} >

                
		      <MapView
				style={styles.map}
				initialRegion={Locations[0]}
				showsUserLocation>
				{Locations.map(region => (
					<Marker
					key={region.title}
					onPress={() => {
						showModal(region.title, region.description);
					}}
					coordinate={region}
					title={region.title}
					/>
				))}
      </MapView>
              

                </View>
        </View>
    )
}



const styles = StyleSheet.create({
    containerbox: {
       flex: 1,
  
      alignItems: 'center',
      //justifyContent: 'center',
      paddingTop: 15,
      paddingBottom: 12,
      backgroundColor: "white",


      fontSize: 50,
    fontWeight: 'bold',
    color: 'black',
    },

    centeredView: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'flex-end'
    },
    container: {
      ...StyleSheet.absoluteFillObject,
      height: 400,
      width: 400,
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    map: {
      ...StyleSheet.absoluteFillObject,
    },

	modalView: {
		margin: 30,
		height: 200,
		backgroundColor: 'white',
		borderRadius: 10,
		padding: 35,
		alignItems: 'center',
		elevation: 5,
	  },
	  modalbutton: {
		borderRadius: 5,
		padding: 5,
		paddingHorizontal: 20,
		elevation: 2,
		marginTop: 30,
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
	  modalText: {
		marginBottom: 15,
		textAlign: 'center',
		fontSize: 20,
		fontWeight: "bold",
	  },

    // box: {
    //   height: 200,
    //   width:200,
    //   alignItems: 'center',
    //     justifyContent: 'center',
    //   }
  });


export default SignupScreen



