import React, {Component} from 'react';
import {WebView, AppRegistry, Image } from 'react-native';

 export default class Beans extends Component {
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
  render() {
    return (
      <WebView
        source={{uri: 'https://datalocal.info/mkulima/index.php?pg=crop-db&comm_id=76'}}
        style={{marginTop: 20}}
      />
    );
  }
}

AppRegistry.registerComponent('Beans', () => Beans);