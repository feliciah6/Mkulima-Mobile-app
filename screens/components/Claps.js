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








// the second part that completes the registration
export default class Satelite extends Component<{}> {
  // the constructor
  constructor() {
    super();
       this.state = {
       crops: [],
       selectedCrops: "",     
    };
    




    
}










   componentDidMount(){
      fetch("https://datalocal.info/mkulima/api/crops_get.php")
    .then((response) => {
      return response.json();
    })
    .then(data => {
      let cropsFromApi = data.map(crops => { return {crops: commodity_id, crops: commodity} })
      this.setState({ crops: [{value: '', display: '(Select crop to view)'}].concat(cropsFromApi) });
    }).catch(error => {
      console.log(error);
    });

  }
 

 



GetSelectedPickerItem=()=>{
 
    Alert.alert(this.state.PickerValueHolder);
  }



render() {
   return (
      <ScrollView>
      <View style={{alignItems: "center"}}>
        
        <Picker style={{width: "100%", height: 100}} 
        selectedValue={this.state.selectedCrops} 
        onValueChange={(itemValue, itemIndex) => this.setState({selectedCrops: itemValue})} >
 
        {
        onChange={(e) => this.setState({selectedCrops: e.target.value, validationError: e.target.value === "" ? "You must select a crop" : ""})}>
          {this.state.crops.map((crops) => <option key={crops.commodity} value={crops.commodity}>{crops.commodity}</option>)}

          // this.state.details.map((v) =>{<Picker.Item label={v.commodity}  value={v.commodity} />
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