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

import { Dropdown } from 'react-native-material-dropdown';
import Satellite from './Satellite.json';

import base64 from 'base-64';

console.log(Satellite);



// the second part that completes the registration
export default class Satelite extends Component<{}> {
  // the constructor
  constructor() {
    super();
     this.state = {
       county:'',
       selectedCrops: "", 
       detail: []     
    };


    // this.state = {
    //    PickerValueHolder : '',
    //    dataxx: [
    //       {
    //       "record_id": "1",
    //       "year": "2002",
    //       "image": "https://datalocal.info/mkulima/assets/image/spatial/NakuruTown_Urbanization_2002.png"
    //       },
    //       {
    //       "record_id": "2",
    //       "year": "2007",
    //       "image": "https://datalocal.info/mkulima/includes/stories/image/shosho-nyokabi.png"
    //       },
    //           {
    //       "record_id": "3",
    //       "year": "2012",
    //       "image": "https://img.youtube.com/vi/A4BdiV8h6U0/mqdefault.jpg"
    //       },
    //       {
    //       "record_id": "4",
    //       "year": "2017",
    //       "image": "https://img.youtube.com/vi/nbUxN_P0HTY/mqdefault.jpg"
    //       },
    //       {
    //       "record_id": "5",
    //       "year": "2019",
    //       "image": "https://img.youtube.com/vi/p96fLSBNFYE/mqdefault.jpg"
    //       }
    //     ]
    // };

    
}
/*
var App = React.createClass({
getInitialState: function() {
    return {
      opts:[]      
    };
},

componentDidMount: function() {
  var source=Satellite.data;
  this.serverRequest = $.get(source, function (result) {
    var arrTen = [];
    for (var k = 0; k < result.length; k++) {
        arrTen.push(<option key={result[k].record_id} value={result[k].year}> {result[k].image} </option>);
    }
    this.setState({
      opts: arrTen
    });
  }.bind(this));
},

  componentWillUnmount: function() {
  this.serverRequest.abort();
},*/








 // componentDidMount() 
 // {

      
 //        fetch('http://162.144.151.204:9321/mymjengo/counties/list', 
 //        {  
 //          method: 'GET',
 //          headers: {
 //            'Content-Type': 'application/json',
 //            'Authorization': 'Basic ' + base64.encode('makomeki:simiti19')
 //          },
 //        })
 //        .then((response) => response.json())
 //        .then((responseJson) => {
 //          if (responseJson.udaku.Error === false)
 //          {
 //            // get counties list

 //            global.counties = responseJson.udaku.Data;
 //            ddlist = [];

 //            // create a list of dict objects
 //            for (i = 0; i < global.counties.length; i++)
 //              {

 //             ddlist.push({value: global.counties[i][0]}); 
 //            }
 //            this.setState({dropdownData: ddlist});

 //          }

 //        else
 //      {
 //       dropdownData = [];
 //        Alert.alert('Mkulima', responseJson.udaku.ResultDesc, [{text: 'OK'}]);
 //      }  
      
 //        })
 //        .catch((error) => {
 //          console.error(error);
 //          dropdownData = [];
 //        });
 //      }

   componentDidMount(){
    return fetch('https://datalocal.info/mkulima/api/crops_get.php')
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
 

 

  static navigationOptions = {
    headerStyle: {
      backgroundColor: "",
      elevation: null
    }
  };

// The screen layout methods and its styles   

GetSelectedPickerItem=()=>{
 
    Alert.alert(this.state.PickerValueHolder);
  }

/*
this.serverRequest = $.get(source, function (result) {
    var arrTen = [];
    for (var k = 0; k < result.length; k++) {
        arrTen.push(<option key={result[k].record_id} value={result[k].year}> {result[k].image} </option>);
    }
    this.setState({
      opts: arrTen
    });
  }.bind(this));*/

render() {
   
   /*
<Dropdown
                  itemColor='#000000'
                  label='Select year'
                  onChangeText={county  => this.setState({ county })}
                  data={this.state.dropdownData}
                />
   */  
   /*
 {{ $.get(satellite.data, function (result) {
  for (var k = 0; k < result.length; k++) {
    ( <Picker.Item label=""+{result[k].year}+"" value={result[k].year} />)
  }
 }
 }} 
   */
  return (
      <ScrollView>
      <View style={{alignItems: "center"}}>
        
        <Picker style={{width: "100%", height: 100}} 
        selectedValue={this.state.selectedCrops} 
        onValueChange={(itemValue, itemIndex) => this.setState({selectedCrops: itemValue})} >
 
        {
          this.state.detail.map((v) =>{
            return <Picker.Item label={v.commodity}  value={v.commodity} />
          })
        }
        
 
      </Picker>
 
 
      <Button title="Get Selected Picker Value" onPress={ this.GetSelectedPickerItem } />
 

          </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1.2,
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 20,
 
  },
 
  window1: {
    marginBottom: 12,
    color:"#ffffff",
    backgroundColor: "#014422",
    width:200,
    height:100,

  },
 
  dropdown: {
    marginBottom: 12,
    color:"#000000"

  }

});

AppRegistry.registerComponent("Satelite", () => Satelite);