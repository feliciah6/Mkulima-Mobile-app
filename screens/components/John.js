import React, {Component} from 'react';
import {WebView, AppRegistry, Image } from 'react-native';

 export default class John extends Component {

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
        source={{uri: 'https://datalocal.info/mkulima/index.php?pg=stories&op=data&tk=0.30415898973400357&bw_farming%5B%5D=crop&bw_gender%5B%5D=Male&bw_age%5B%5D=41_60&bw_practice%5B%5D=for%20profit'}}
        style={{marginTop: 20}}
      />
    );
  }
}

AppRegistry.registerComponent('John', () => John);