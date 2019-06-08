// import React from 'react';

import React, { Component } from "react";
//import react in our code. 
import { Text, View, StyleSheet, AppRegistry, Image, ActivityIndicator, ScrollView,FlatList, TouchableOpacity,  Alert } from 'react-native';
//import all the components we are going to use.
import { Card, Button, Icon  } from 'react-native-elements';

import { SliderBox } from 'react-native-image-slider-box';


// const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');


//import Card
 
class Satelite extends React.Component {

    constructor(props){
    super(props);
    this.state ={ isLoading: true}
    data:""

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

// componentDidMount: function() {
//   var source=Satellite.data;
//   this.serverRequest = $.get(source, function (result) {
//     var arrTen = [];
//     for (var k = 0; k < result.length; k++) {
//         arrTen.push(<option key={result[k].record_id} value={result[k].year}> {result[k].image} </option>);
//     }
//     this.setState({
//       opts: arrTen
//     });
//   }.bind(this));
// },

//   componentWillUnmount: function() {
//   this.serverRequest.abort();
// },*/




  componentDidMount(){
    return fetch('https://datalocal.info/mkulima/api/satellite_get.json')
      .then((response) => response.json())
      .then((responseJson) => {

        
          this.setState({
          isLoading: false,
          dataSource: responseJson.detail,
        }, function(){


          
          /*alert(this.state.dataSource[0].images[0].image1);*/
        });
        
        

      })
      .catch((error) =>{
        console.error(error);
      });
  }



  render() {

    // let dimensions = Dimensions.get("window");
    // let imageHeight = Math.round((dimensions.width * 9) / 16);
    // let imageWidth = dimensions.width;





    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    }

    return (
      <ScrollView>
      <View style={styles.container}>
<Card title={this.state.dataSource[0].title}>
         <Image
          style={{width: 300, height: 200 }}
          source={{uri: this.state.dataSource[0].images[0].image1 }}
        />
        <Text>{this.state.dataSource[0].desc_title}</Text>
        <Text>{this.state.dataSource[0].desc_intro}</Text>


</Card>
<Text style = {styles.text1}>Satellite Data for Urbanization (2002 - 2017)</Text>


  <ScrollView horizontal={true}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}>
 
   <Image
          style={{width: 100, height: 50,  padding: 5,  margin: 5 }}
          source={{uri: 'https://datalocal.info/mkulima/assets/image/spatial/NakuruTown_Urbanization_2002.png'}}
        />
 
<Image
          style={{width: 100, height: 50,  padding: 5,  margin: 5 }}
          source={{uri: 'https://datalocal.info/mkulima/assets/image/spatial/NakuruTown_Urbanization_2007.png'}}
        /> 
<Image
          style={{width: 100, height: 50,  padding: 5,  margin: 5 }}
          source={{uri: 'https://datalocal.info/mkulima/assets/image/spatial/NakuruTown_Urbanization_2012.png'}}
        /> 
<Image
          style={{width: 100, height: 50,  padding: 5,  margin: 5 }}
          source={{uri: 'https://datalocal.info/mkulima/assets/image/spatial/NakuruTown_Urbanization_2017.png'}}
        /> 
    
 
</ScrollView>

<Card title={this.state.dataSource[1].title}>
         <Image
          style={{width: 300, height: 200 }}
          source={{uri: this.state.dataSource[1].images[0].image1 }}
        />
        <Text>{this.state.dataSource[1].desc_title}</Text>
        <Text>{this.state.dataSource[1].desc_intro}</Text>


  </Card>

<Text style = {styles.text1}>Nakuru Town Land Use Trend (2002 - 2017)</Text>


  <ScrollView horizontal={true}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}>
 
   <Image
          style={{width: 100, height: 50,  padding: 5,  margin: 5 }}
          source={{uri: 'https://datalocal.info/mkulima/assets/image/landuse1.png'}}
        />
 
<Image
          style={{width: 100, height: 50,  padding: 5,  margin: 5 }}
          source={{uri: 'https://datalocal.info/mkulima/assets/image/landuse2.png'}}
        /> 
<Image
          style={{width: 100, height: 50,  padding: 5,  margin: 5 }}
          source={{uri: 'https://datalocal.info/mkulima/assets/image/nakuru-satellite-inv.png'}}
        /> 
<Image
          style={{width: 100, height: 50,  padding: 5,  margin: 5 }}
          source={{uri: 'https://datalocal.info/mkulima/assets/image/nakuru-satellite.png'}}
        /> 
    
 
</ScrollView>

  <Card title={this.state.dataSource[2].title}>
         <Image
          style={{width: 300, height: 200 }}
          source={{uri: this.state.dataSource[2].images[0].image1 }}
        />
        <Text>{this.state.dataSource[2].desc_title}</Text>
        <Text>{this.state.dataSource[2].desc_intro}</Text>


  </Card>

  <Text style = {styles.text1}>Nakuru Town Water Ways Trend (2002 - 2017)</Text>


  <ScrollView horizontal={true}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}>
 
   <Image
          style={{width: 100, height: 50,  padding: 5,  margin: 5 }}
          source={{uri: 'https://datalocal.info/mkulima/assets/image/nakuru-satellite-inv.png'}}
        />
 
<Image
          style={{width: 100, height: 50,  padding: 5,  margin: 5 }}
          source={{uri: 'https://datalocal.info/mkulima/assets/image/landuse2.png'}}
        /> 
<Image
          style={{width: 100, height: 50,  padding: 5,  margin: 5 }}
          source={{uri: 'https://datalocal.info/mkulima/assets/image/nakuru-satellite-inv.png'}}
        /> 
<Image
          style={{width: 100, height: 50,  padding: 5,  margin: 5 }}
          source={{uri: 'https://datalocal.info/mkulima/assets/image/nakuru-satellite.png'}}
        /> 
    
 
</ScrollView>
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
    color:'#000000'
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
  imageThumbnail: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
  },

  text1: {
    fontSize: 15,
    alignSelf: "flex-start",
    textAlign: "left",
    color: "#000000",
    fontWeight: "bold",
    paddingTop: 5
    
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
export default Satelite; 



// AppRegistry.registerComponent("Welcome", () => Welcome);

