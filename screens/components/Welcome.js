// import React from 'react';

import React, { Component } from "react";
//import react in our code. 
import { Text, View, StyleSheet, AppRegistry, Image, ScrollView, TouchableOpacity, Alert } from 'react-native';
//import all the components we are going to use.
import { Card, Button, Icon  } from 'react-native-elements';

import { createStackNavigator, createAppContainer } from "react-navigation";

import Profile from './Profile';
import Satelites from './Satelites';
// import Contact from './Contact';
import Menu from './Menu';
import About from './About';
import Crops from './Crops';
import Cabbage from './Cabbage';
import Carrot from './Carrot';
import Cassava from './Cassava';
import Red from './Red';
import Wheat from './Wheat';
import Tomato from './Tomato';
import Sweet from './Sweet';
import Soy from './Soy';
import Spinach from './Spinach';
import Sunflower from './Sunflower';
import Pigeon from './Pigeon';
import Sorghum from './Sorghum';
import Pumpkin from './Pumpkin';
import Potato from './Potato';
import Millet from './Millet';
import Onion from './Onion';
import Cowpea from './Cowpea';
import Crop from './Crop';
import Trial from './Trial';
import Images from './Images';


//import Card
 
class Welcome extends React.Component {

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


  onWelcomePress = () => {
  this.props.navigation.navigate('Profile');
  };

  onWelcome2Press = () => {
  this.props.navigation.navigate('Menu');
  };

  render() {
    return (
      <ScrollView>
      <View style={styles.container}>

        <Card title="Welcome Spotlight on Nakuru">
        {/*react-native-elements Card*/}
         <Image
          style={{width: 300, height: 200 }}
          source={{uri: 'https://www.cropscience.bayer.com/-/media/bcs-inter/ws_globalportal/crop-science/smallholder-farming/smallholder-farming-women-in-africa-women-in-agriculture.jpg'}}
        />

          <Text style={styles.paragraph}>
           We look at households in Nakuru and help farmers plan accordingly
          </Text>


           <TouchableOpacity
              style={styles.buttonContainer}
              onPress={this.onWelcomePress.bind(this)}
            >
              <Text style={styles.buttonText}>READ MORE</Text>
            </TouchableOpacity>

        </Card>


    <View style={styles.container2}>
    <Card title="Satellite Data Trends and Patterns">

         <Image
          style={{width: 300, height: 200 }}
          source={{uri: 'https://geospatialmedia.s3.amazonaws.com/wp-content/uploads/2018/07/DGdigiglobe.jpg'}}
        />

          <Text style={styles.paragraph}>
           Using satelite data we show changing face of agriculture and urbanization over time
          </Text>
            <TouchableOpacity
              style={styles.buttonContainer}
              onPress={this.onWelcome2Press.bind(this)}
            >
              <Text style={styles.buttonText}>READ MORE</Text>
            </TouchableOpacity>
        </Card>

      </View>
      </View>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 10,
    backgroundColor: '#ecf0f1',
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

  logo2: {
    width: 150,
    height: 80
  },

  buttonText: {
    textAlign: "center",
    color: "#FFF",
    fontFamily: "Montserrat-Medium",
    fontWeight: "700",
    paddingTop:10
  },
  container2: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 5,
    backgroundColor: '#ecf0f1',
    marginTop: 10,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontFamily: "Montserrat-Medium",
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },
});

const RootStack = createStackNavigator ({
  Welcome: { screen: Welcome},
  Satelites: { screen: Satelites, 
  navigationOptions : {
    header : null,
  },
},
  Menu: { screen: Menu, 
  navigationOptions : {
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
  
  },},

  About: { screen: About },
  Crops: { screen: Crops },
  Cabbage: { screen: Cabbage },
  Carrot: { screen: Carrot },
  Crop: { screen: Crop },
  Cowpea: { screen: Cowpea },
  Trial: { screen: Trial },
  Millet: { screen: Millet },
  Onion: { screen: Onion },
  Pigeon: { screen: Pigeon },
  Cassava: { screen: Cassava },
  Potato: { screen: Potato },
  Spinach: { screen: Spinach },
  Soy: { screen: Soy },
  Wheat: { screen: Wheat },
  Tomato: { screen: Tomato },
  Pumpkin: { screen: Pumpkin },
  Red: { screen: Red },
  Sunflower: { screen: Sunflower },
  Sorghum: { screen: Sorghum },
  Images: { screen: Images },
  Sweet: { screen: Sweet },
  // Contact: { screen: Contact,
  // navigationOptions :{
  //   header:null,
  // }, },
  Profile: { screen: Profile, 
  navigationOptions : {
    header : null,
  },}
});

const App = createAppContainer(RootStack);

export default App;



