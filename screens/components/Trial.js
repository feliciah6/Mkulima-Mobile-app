// import React from 'react';

import React, { Component } from "react";
//import react in our code. 
import { Text, View, StyleSheet, AppRegistry, Image, ScrollView, TouchableOpacity, Linking,  Alert } from 'react-native';
//import all the components we are going to use.
import { Card, Button, Icon  } from 'react-native-elements';

import Data from './Data';

import { createStackNavigator,createAppContainer } from "react-navigation";





//import Card
 
class Trial extends React.Component {

   constructor(props) { 
    super(props);
       this.state ={ isLoading: true}
    
  };


// newworkRequest() {

//     return fetch('https://datalocal.info/mkulima/api/crops_get.php?comm_id=82')
//       .then((response) => response.json())
//       .then((responseJson) => {

//         this.setState({
//           isLoading: false,
//           dataSource: responseJson.detail,
//         }, function(){

//         });

//       })
//            });
//         .catch((error) =>{
//         console.error(error);


// }
onContactPress() {
this.props.navigation.navigate('Data'); 
}





  render() {
    return (
    <ScrollView>
    <View style={styles.container}>
    <Text style = {styles.text}>Commodities Data</Text>
    <CardSection>
    <TouchableOpacity onPress={() => Linking.openURL('https://datalocal.info/mkulima/api/crops_get.php?comm_id=82')}>
        <Image
          style={{width: 80, height: 40 }}
          source={require("./crop1.jpg")} 
        />
        <Text>Bean</Text>
    </TouchableOpacity>
  </CardSection>
  <CardSection>
   <TouchableOpacity onPress={() => Actions.workerDetails()}>
    <Image
          style={{width: 80, height: 40 }}
          source={require("./crop2.jpg")} 
        />
    <Text>Cabbage</Text>
   </TouchableOpacity>
  </CardSection>
  <CardSection>
   <TouchableOpacity onPress={() => this.onContactPress()}>
    <Image
          style={{width: 80, height: 40 }}
          source={require("./crop3.jpg")} 
        />
        <Text>Carrot</Text>
   </TouchableOpacity>
  </CardSection>
  <CardSection>
   <TouchableOpacity onPress={() => Actions.compltpage()}>
     <Image
          style={{width: 80, height: 40 }}
          source={require("./crop4.jpg")} 
        />
        <Text>Cassava</Text>
   </TouchableOpacity>
  </CardSection>
  <CardSection>
   <TouchableOpacity onPress={() => Actions.userpage()}>
    <Image
          style={{width: 80, height: 40 }}
          source={require("./crop5.jpg")} 
        />
        <Text>Cowpea</Text>
   </TouchableOpacity>
  </CardSection>
   <CardSection>
   <TouchableOpacity onPress={() => Actions.userpage()}>
    <Image
          style={{width: 80, height: 40 }}
          source={require("./crop6.jpg")} 
        />
        <Text>Millet</Text>
   </TouchableOpacity>
  </CardSection>

   <CardSection>
   <TouchableOpacity onPress={() => Actions.userpage()}>
    <Image
          style={{width: 80, height: 40 }}
          source={require("./onion.jpg")} 
        />

    <Text>onions</Text>
   </TouchableOpacity>
  </CardSection>

   <CardSection>
   <TouchableOpacity onPress={() => Actions.userpage()}>
    <Image
          style={{width: 80, height: 40 }}
          source={require("./pigeon.jpg")} 
        />
        <Text>pigeon-pea</Text>
   </TouchableOpacity>
  </CardSection>

   <CardSection>
   <TouchableOpacity onPress={() => Actions.userpage()}>
    <Image
          style={{width: 80, height: 40 }}
          source={require("./potato.jpg")} 
        />

        <Text>Potato</Text>
   </TouchableOpacity>
  </CardSection>

  <CardSection>
   <TouchableOpacity onPress={() => Actions.userpage()}>
    <Image
          style={{width: 80, height: 40 }}
          source={require("./sorghum.jpg")} 
        />

        <Text>sorghum</Text>
   </TouchableOpacity>
  </CardSection>

  <CardSection>
   <TouchableOpacity onPress={() => Actions.userpage()}>
    <Image
          style={{width: 80, height: 40 }}
          source={require("./redgram.jpg")} 
        />
        <Text>Pumpkin</Text>

   </TouchableOpacity>
  </CardSection>

  <CardSection>
   <TouchableOpacity onPress={() => Actions.userpage()}>
    <Image
          style={{width: 80, height: 40 }}
          source={require("./pumpkin.jpg")} 
        />
        <Text>Red-gram</Text>
   </TouchableOpacity>
  </CardSection>

    <CardSection>
   <TouchableOpacity onPress={() => Actions.userpage()}>
    <Image
          style={{width: 80, height: 40 }}
          source={require("./redgram.jpg")} 
        />
        <Text>sunflower</Text>

   </TouchableOpacity>
  </CardSection>

    <CardSection>
   <TouchableOpacity onPress={() => Actions.userpage()}>
    <Image
          style={{width: 80, height: 40 }}
          source={require("./redgram.jpg")} 
        />
        <Text>spinach</Text>

   </TouchableOpacity>
  </CardSection>

    <CardSection>
   <TouchableOpacity onPress={() => Actions.userpage()}>
    <Image
          style={{width: 80, height: 40 }}
          source={require("./redgram.jpg")} 
        />
        <Text>soybean</Text>

   </TouchableOpacity>
  </CardSection>


   <CardSection>
   <TouchableOpacity onPress={() => Actions.userpage()}>
    <Image
          style={{width: 80, height: 40 }}
          source={require("./sweet-potato.jpg")} 
        />
        <Text>sweet-potato</Text>
   </TouchableOpacity>
  </CardSection>


   <CardSection>
   <TouchableOpacity onPress={() => Actions.userpage()}>
    <Image
          style={{width: 80, height: 40 }}
          source={require("./wheat.jpg")} 
        />
        <Text>wheat</Text>
   </TouchableOpacity>
  </CardSection>





  </View>



      </ScrollView>
    );
  }
}
const CardSection = (props) =>{
    return(
    <View style={styles.containerStyle}>
    {props.children}
    </View>
    );

};
const styles ={
    containerStyle: {
        padding: 10,
        backgroundColor: 'white',
        borderWidth:0,
        marginBottom:10,
        marginLeft:10,
        marginRight:10,
        borderColor:'#808080',
        marginTop:30,
        elevation: 10
    },
    text: {
    fontSize: 30,
    alignSelf: "center",
    textAlign: "center",
    color: "#000000",
    fontWeight: "bold"
    
  },

    maincontainer: {
        flex: 1,
        flexWrap: 'wrap',
        flexDirection: 'row'
  },


    text2: {
    fontSize: 17,
    alignSelf: "flex-end",
    textAlign: "left",
    color: "#000000",
    fontWeight: "normal",
    paddingTop:10
    
  }
};

const RootStack = createStackNavigator ({
  Trial: { screen: Trial },
  Data: { screen: Data }
  
});

const App = createAppContainer(RootStack);

export default App;

