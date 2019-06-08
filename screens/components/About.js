import React, { Component } from "react";
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
  Image,
  Picker,
  Alert,
  Button,
  ScrollView,
  TouchableOpacity,  
  KeyboardAvoidingView,
  AsyncStorage
} from "react-native";


import Profile from './Profile';
import { createStackNavigator, createAppContainer  } from "react-navigation";


export default class About extends Component {
  constructor(props) {
    super(props);
    this.state = {

     
      
    };
  }


  static navigationOptions = {
    headerStyle: {
      backgroundColor: "",
      elevation: null
    }
  };
  render() {


    return (
      <ScrollView>
      <View behavior="padding" style={styles.container}>
      <Image style={styles.logo} source={require("./mkulima-logo.png")} />
        <Text style = {styles.text}>About Mkulima Data Cube</Text>
        <Text style = {styles.text1}>The Vision</Text>
        <Text style = {styles.text2}>The main objective of the project is to work with the County Government of Nakuru in Kenya, Civil society groups and research organisations to develop appropriate methods for governments, farmers and youth groups to produce, access and analyse data at the country level, for better policy and decision making to improve market access and agricultural productivity and boost nutrition.</Text>
        <Text style = {styles.text1}>The Objectives</Text>
        <Text style = {styles.text2}>Through this project, we hope to achieve the following primary objectives:</Text>
        <Text style = {styles.text2}>1. Train farmers on data, its use and its value to their prosperity to create awareness and develop a culture of data usage for decision making in the community. By so doing, we would enable the farmers to take a data driven approach to the business of farming in order to develop themselves.</Text>
        <Text style = {styles.text2}>2. Establish opportunities for competitiveness and potential for improved agribusiness for the communities we work with. This we aim to achieve by collecting in-depth citizen generated data relating to production costs, type of farming, produce and harvest trends, distance to markets, size of land, support systems e.g. sources of support and support needed, water availability and sources, water management, relationship with agriculture officers etc.</Text>
        <Text style = {styles.text2}>3. Develop pilot for data access at sub-national level, in collaboration with local institutions, to enhance data production and use by local government, farmers and youth groups, to enhance market access and agricultural production.</Text>

       
        </View>
    </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 20,
    paddingTop: 5
  },
  logo: {
    width: 350,
    height: 200
  },
  
 text: {
    fontSize: 30,
    alignSelf: "center",
    textAlign: "center",
    color: "#000000",
    fontWeight: "bold"
    
  },
   text1: {
    fontSize: 25,
    alignSelf: "flex-start",
    textAlign: "left",
    color: "#000000",
    fontWeight: "bold",
    paddingTop: 5
    
  },
    text2: {
    fontSize: 17,
    alignSelf: "flex-start",
    textAlign: "left",
    color: "#000000",
    fontWeight: "normal",
    paddingTop: 10
    
  }
});

// const RootStack = createStackNavigator({
//   About: { screen: About },


 
// });

// const App = createAppContainer(RootStack);

// export default App;


AppRegistry.registerComponent("About", () => About);