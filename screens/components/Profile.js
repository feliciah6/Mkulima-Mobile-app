import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Alert,
  Image,
  TouchableOpacity,
  Linking,
  ImageBackground,
  View
} from 'react-native';

import {  Button, Icon  } from 'react-native-elements';
import { createStackNavigator, createAppContainer } from "react-navigation";
import Janet from './Janet';
import John from './John';
import Daniel from './Daniel';
 
import Swiper from 'react-native-swiper';


 
const styles = StyleSheet.create({
  wrapper: {
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    padding:10,
    margin:20,
    alignItems: 'center',
    backgroundColor:'rgba(255,255,255, 0.7)',
  },

  buttonContainer: {
   borderRadius: 0,
    marginLeft: 0, 
    marginRight: 0, 
    marginBottom: 0,
    backgroundColor: '#014422',
    width:300,
    height : 50, 
  },

  buttonText: {
    textAlign: "center",
    color: "#FFF",
    fontWeight: "700",
    paddingTop:10
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    padding:10,
    margin:20,
    alignItems: 'center',
    backgroundColor:'rgba(255,255,255, 0.7)',
  },
  backgroundImage:{
        width: '100%',
        height: '100%',
        flex: 1 
}, 
  slide3: {
    flex: 1,
    justifyContent: 'center',
    padding:10,
    margin:20,
    alignItems: 'center',
   backgroundColor:'rgba(255,255,255, 0.7)',
  },

  text: {
    color: '#000',
    fontSize:18,
    paddingTop:10,
    fontWeight: 'bold',

  },
  text1: {
    color: '#000',
    fontSize:30,
    fontWeight: 'bold',
    
  }
})
 
class Profile extends Component {


   constructor(props) { 
    super(props);
    this.state = {
    };
  }

     static navigationOptions = {
   
      headerTitle: (
      <Image
      resizeMode='cover' 
      style={{
        width:150,
        height:76,
        resizeMode:'contain',
        alignSelf:'center'
      }}


      source={require("./mkulima-logo.png")}
      />
  ),

   
  };

  

  _onPressButton() {
    Alert.alert('You will see the data soon!')
  }


   onProfilePress = () => {
  this.props.navigation.navigate('Janet');
  };

  onProfile2Press = () => {
  this.props.navigation.navigate('John');
  };

   onProfile3Press = () => {
  this.props.navigation.navigate('Daniel');
  };


  render(){
    return (
      <Swiper style={styles.wrapper} showsButtons={true}>
        <ImageBackground source={require("./farm1.jpg")} style={styles.backgroundImage}>
        <View style={styles.slide1}>
        <Text style={styles.text1}>MEET THE COMMUNITY</Text>
        <Text style={styles.text}>This is JANET(Traditional Farmer). She  is 64 years old and is a crop farmer. She  Rents a piece of land that is above 1/4 to 1/2 acre, and farms FLOWERS. She  sells  of the produce to the . The distance from JANET'’s farm to the market is 2-5 km. She gets produce to the market via a broker.JANET lives in Lanet  Umoja  location and represents 157  other such farming households in the larger community (19.65%) where the provider is aged over 55 years.</Text>
        <TouchableOpacity
              style={styles.buttonContainer}
              onPress={this.onProfilePress.bind(this)}>
              <Text style={styles.buttonText}>Click to see the data</Text>
        </TouchableOpacity>
        </View>
        </ImageBackground>


        <ImageBackground source={require("./farm2.jpg")} style={styles.backgroundImage}>
        <View style={styles.slide2}>
        <Text style={styles.text1}>MEET THE COMMUNITY</Text>
          <Text style={styles.text}>This is JOHN  (Golden Handshake Farmer) He  is 48 years  old and is a crop farmer. He  Rents a piece of land that is below 1/4 acre, and farms VEGETABLES. He  sells  less than half  of the produce to the Country wide. The distance from JOHN's farm to the market is 2-5 km. He personally takes produce to the market. JOHN lives in Lanet Umoja location and represents 364 other such farming households in the larger community (45.56%) where the provider is aged  BETWEEN 40 AND 55 years.</Text>
           <TouchableOpacity
              style={styles.buttonContainer}
              onPress={this.onProfile2Press.bind(this)}>
              <Text style={styles.buttonText}>Click to see the data</Text>
        </TouchableOpacity>
              </View>
        </ImageBackground>



      <ImageBackground source={require("./farm3.jpg")} style={styles.backgroundImage}>  
        <View style={styles.slide3}>
        <Text style={styles.text1}>MEET THE COMMUNITY</Text>
          <Text style={styles.text}>This is DANIEL (Hobby Farmer) . He  is 32 years old and is a farmer. He   a piece of land that is , and farms SUKUMAWIKI. He  sells  of the produce to the . The distance from DANIEL's farm to the market is . DANIEL lives in  Lanet Umoja location and represents 607 other such youthful farming households in the larger community (75.97%) where the provider is aged  BETWEEN 25 AND 35 years.</Text>
        <TouchableOpacity
              style={styles.buttonContainer}
              onPress={this.onProfile3Press.bind(this)}>
              <Text style={styles.buttonText}>Click to see the data</Text>
        </TouchableOpacity>
          </View>
        </ImageBackground>

      </Swiper>
    );
  }
}

const RootStack = createStackNavigator({
  
  Profile: { screen:Profile },
  Janet: { screen: Janet },
  John: { screen: John },
  Daniel: { screen: Daniel }
});

const App = createAppContainer(RootStack);

export default App;
 
