// import React from 'react';

import React, { Component } from "react";
//import react in our code. 
import { Text, View, StyleSheet, AppRegistry, Image, ScrollView, TouchableOpacity, Alert } from 'react-native';
//import all the components we are going to use.
import { Card, Button, Icon  } from 'react-native-elements';

import { createStackNavigator, createAppContainer } from "react-navigation";


//import Card
 
export default class Data extends React.Component {

   constructor(props) { 
    super(props);
    this.state = {
    };
  }


 

  render() {
    return (
      <ScrollView>
      <View style={styles.container}>
        <Card title="Scientific name ">
        {/*react-native-elements Card*/}
         <Image
          style={{width: 300, height: 200 }}
          source={require("./crop1.jpg")}
        />

          <Text style={styles.paragraph}>
          </Text>
          <Text style={styles.paragraph}>
          </Text>
          </Card>


    <View style={styles.container2}>
    <Card title="Market Trend and prices">
        

          <Text style={styles.paragraph}>
          </Text>
        </Card>

      </View>


    <View style={styles.container2}>
    <Card title="Calendar">

       
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

  buttonText: {
    textAlign: "center",
    color: "#FFF",
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
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },
});


