import React from 'react';  
import {StyleSheet, Text, AppRegistry, Image, ScrollView, View, ActivityIndicator,  Alert, ImageBackground, TextInput, TouchableOpacity , KeyboardAvoidingView,
  AsyncStorage} from 'react-native';  
import { createBottomTabNavigator, createStackNavigator, createAppContainer } from 'react-navigation';  
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'; 
import { Card, Button  } from 'react-native-elements'; 
import Profile from './Profile';
import Satelite from './Satelite';
import Contact from './Contact';
import Menu from './Menu';
import Janet from './Janet';
import John from './John';
import Trial from './Trial';
import Daniel from './Daniel';
import Swiper from 'react-native-swiper';
import { Dropdown } from 'react-native-material-dropdown';
import base64 from 'base-64'; 
// begining of welcome screen


class HomeScreen extends React.Component {  
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

  onHomeScreenPress = () => {
  this.props.navigation.navigate('Profile');
  };

  onHomeScreen2Press = () => {
  this.props.navigation.navigate('Menu');
  };

  render() {  
    return (  
      <View style={styles.container}>  
      <ScrollView>
      <View style={styles.container1}>
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
              onPress={this.onHomeScreenPress.bind(this)}
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
              onPress={this.onHomeScreen2Press.bind(this)}
            >
              <Text style={styles.buttonText}>READ MORE</Text>
            </TouchableOpacity>
        </Card>

      </View>
      </View>
      </ScrollView>
      </View>  
    );  
  }  
} 



// screen 2

class CommoditiesDataScreen extends React.Component { 
   constructor(props) { 
    super(props);
       this.state ={ isLoading: true}
    
  };


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
onContactPress() {
this.props.navigation.navigate('Data'); 
}
 
  render() {  
    return (  
        <View style={styles.container}> 

    <ScrollView>
    <View style={styles.maincontainer}>
    <Text style = {styles.text7}>Commodities Data</Text>
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
      
        </View>  
    );  
  }  
} 


// screen3
class SateliteTrendsScreen extends React.Component {

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
      <Text style = {styles.text3}>Satelite trends</Text>
<Card title={this.state.dataSource[0].title}>
         <Image
          style={{width: 300, height: 200 }}
          source={{uri: this.state.dataSource[0].images[0].image1 }}
        />
        <Text>{this.state.dataSource[0].desc_title}</Text>
        <Text>{this.state.dataSource[0].desc_intro}</Text>

  </Card>
  <Text style = {styles.text10}>Satellite Data for Urbanization (2002 - 2017)</Text>


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
  <Text style = {styles.text10}>Nakuru Town Land Use Trend (2002 - 2017)</Text>


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

    <Text style = {styles.text10}>Nakuru Town Water Ways Trend (2002 - 2017)</Text>


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



// screen 4
class CommunityStoriesScreen extends React.Component {  

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


  CommunityStoriesScreenPress = () => {
  this.props.navigation.navigate('Janet');
  };

  CommunityStoriesScreen2Press = () => {
  this.props.navigation.navigate('John');
  };

   CommunityStoriesScreen3Press = () => {
  this.props.navigation.navigate('Daniel');
  };


  render() {  
    return (  
         
        <Swiper style={styles.wrapper} showsButtons={true}>
        <ImageBackground source={require("./farm1.jpg")} style={styles.backgroundImage}>
        <View style={styles.slide1}>
        <Text style={styles.text4}>MEET THE COMMUNITY</Text>
        <Text style={styles.text}>This is JANET(Traditional Farmer). She  is 64 years old and is a crop farmer. She  Rents a piece of land that is above 1/4 to 1/2 acre, and farms FLOWERS. She  sells  of the produce to the . The distance from JANET'’s farm to the market is 2-5 km. She gets produce to the market via a broker.JANET lives in Lanet  Umoja  location and represents 157  other such farming households in the larger community (19.65%) where the provider is aged over 55 years.</Text>
        <TouchableOpacity
              style={styles.buttonContainer}
              onPress={this.CommunityStoriesScreenPress.bind(this)}>
              <Text style={styles.buttonText}>Click to see the data</Text>
        </TouchableOpacity>
        </View>
        </ImageBackground>


        <ImageBackground source={require("./farm2.jpg")} style={styles.backgroundImage}>
        <View style={styles.slide2}>
        <Text style={styles.text4}>MEET THE COMMUNITY</Text>
          <Text style={styles.text}>This is JOHN  (Golden Handshake Farmer) He  is 48 years  old and is a crop farmer. He  Rents a piece of land that is below 1/4 acre, and farms VEGETABLES. He  sells  less than half  of the produce to the Country wide. The distance from JOHN's farm to the market is 2-5 km. He personally takes produce to the market. JOHN lives in Lanet Umoja location and represents 364 other such farming households in the larger community (45.56%) where the provider is aged  BETWEEN 40 AND 55 years.</Text>
           <TouchableOpacity
              style={styles.buttonContainer}
              onPress={this.CommunityStoriesScreen2Press.bind(this)}>
              <Text style={styles.buttonText}>Click to see the data</Text>
        </TouchableOpacity>
              </View>
        </ImageBackground>



      <ImageBackground source={require("./farm3.jpg")} style={styles.backgroundImage}>  
        <View style={styles.slide3}>
        <Text style={styles.text4}>MEET THE COMMUNITY</Text>
          <Text style={styles.text}>This is DANIEL (Hobby Farmer) . He  is 32 years old and is a farmer. He   a piece of land that is , and farms SUKUMAWIKI. He  sells  of the produce to the . The distance from DANIEL's farm to the market is . DANIEL lives in  Lanet Umoja location and represents 607 other such youthful farming households in the larger community (75.97%) where the provider is aged  BETWEEN 25 AND 35 years.</Text>
        <TouchableOpacity
              style={styles.buttonContainer}
              onPress={this.CommunityStoriesScreen3Press.bind(this)}>
              <Text style={styles.buttonText}>Click to see the data</Text>
        </TouchableOpacity>
          </View>
        </ImageBackground>

      </Swiper>
       
    );  
  }  
}




// screen 5
class AboutScreen extends React.Component {  

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
        <View style={styles.container}>  
      <ScrollView>
      <View behavior="padding" style={styles.container3}>
      <Image style={styles.logo} source={require("./mkulima-logo.png")} />
        <Text style = {styles.text3}>About Mkulima Data Cube</Text>
        <Text style = {styles.text1}>The Vision</Text>
        <Text style = {styles.text2}>The main objective of the project is to work with the County Government of Nakuru in Kenya, Civil society groups and research organisations to develop appropriate methods for governments, farmers and youth groups to produce, access and analyse data at the country level, for better policy and decision making to improve market access and agricultural productivity and boost nutrition.</Text>
        <Text style = {styles.text1}>The Objectives</Text>
        <Text style = {styles.text2}>Through this project, we hope to achieve the following primary objectives:</Text>
        <Text style = {styles.text2}>1. Train farmers on data, its use and its value to their prosperity to create awareness and develop a culture of data usage for decision making in the community. By so doing, we would enable the farmers to take a data driven approach to the business of farming in order to develop themselves.</Text>
        <Text style = {styles.text2}>2. Establish opportunities for competitiveness and potential for improved agribusiness for the communities we work with. This we aim to achieve by collecting in-depth citizen generated data relating to production costs, type of farming, produce and harvest trends, distance to markets, size of land, support systems e.g. sources of support and support needed, water availability and sources, water management, relationship with agriculture officers etc.</Text>
        <Text style = {styles.text2}>3. Develop pilot for data access at sub-national level, in collaboration with local institutions, to enhance data production and use by local government, farmers and youth groups, to enhance market access and agricultural production.</Text>

       
        </View>
    </ScrollView>  
        </View>  
    );  
  }  
}

// screen 6
class ContactScreen extends React.Component { 

constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      subject: "",
      message: ""
     
      
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
onContactrPress() {
this.onContactrPress();
}

async onContactPress() {
    var data = {
    name: this.state.name,   
    email: this.state.email,
    subject: this.state.subject,
    message: this.state.message,

    };
    try {
      var url_string = "https://datalocal.info/mkulima/api/post.php?name="+data.name+"&email="+data.email+"&subject="+data.subject+"&message="+data.message+"";
      // alert(url_string);
     let response = await fetch(url_string,
      {
        method: "POST",
        headers: {
         "Accept": "application/json",
         "Content-Type": "application/json"
        },
       body: JSON.stringify(data)
     }
    );
     if (response.status >= 200 && response.status < 300) {
        alert("Posted successfully!!!");
     }
   } catch (errors) {

     alert(errors);
    } 
   
    this.props.navigation.navigate(''); 
  }



  render() {  
    return (  
        <View style={styles.container}>  
      <ScrollView>
      <View style={styles.container4}>
        <View style={styles.logoContainer}>
          <Image style={styles.logo} source={require("./mkulima-logo.png")} />
          <Text style = {styles.text5}>Get in touch with us:</Text>
         
        </View>

         <KeyboardAvoidingView style={styles.keyboard}>
            <View style={styles.window}>
              <TextInput
                placeholder="Full Name"
                placeholderTextColor="#C0C0C0"
                returnKeyType="next"
                onSubmitEditing={() => this.emailInput.focus()}
                keyboardType="default"
                autoCapitalize="none"
                autoCorrect={false}
                value={this.state.name}
                style={styles.input}
                onChangeText={name => this.setState({ name })}
              />
            </View>


           
            <View style={styles.window}>
              <TextInput
                placeholder="Email"
                placeholderTextColor="#C0C0C0"
                returnKeyType="next"
                onSubmitEditing={() => this.subjectInput.focus()}
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
                value={this.state.email}
                style={styles.input}
                onChangeText={email => this.setState({ email })}
              />
            </View>

            <View style={styles.window}>
              <TextInput
                placeholder="subject"
                placeholderTextColor="#C0C0C0"
                returnKeyType="next"
                onSubmitEditing={() => this.subjectInput.focus()}
                keyboardType="default"
                autoCapitalize="none"
                autoCorrect={false}
                value={this.state.subject}
                style={styles.input}
                onChangeText={subject => this.setState({ subject })}
              />
            </View>


          <View style={styles.window}>
          <TextInput
            value={this.state.message}
            keyboardType = 'default'
            onChangeText={message=> this.setState({ message  })}
            ref={input => (this.messageInput = input)}
            value={this.state.message}
            maxLength={100}
            style={styles.input1}
            placeholder="Write your message here"
            placeholderTextColor="#C0C0C0"
            returnKeyType="next"
            onSubmitEditing={() => this.messageInput.focus()}
            multiline={true}
            numberOfLines={5}
          />
          </View>



            
            
   

           

            <TouchableOpacity
              style={styles.buttonContainer}
              onPress={this.onContactPress.bind(this)}
            >
              <Text style={styles.buttonText}>Submit</Text>
            </TouchableOpacity>
          </KeyboardAvoidingView>
   
      </View>
      </ScrollView>
        </View>  
    );  
  }  
}




  
const TabNavigator = createBottomTabNavigator(  
    {  
      Home:{  
        screen:HomeScreen,  
        navigationOptions:{  
          tabBarLabel:'Home',  
          tabBarIcon:({tintColor})=>(  
              <Icon name="home" color={tintColor} size={20}/>  
          )  
        }  
      },
      Satelite:{  
        screen:SateliteTrendsScreen,  
        navigationOptions:{  
          tabBarLabel:'SateliteTrends',  
          tabBarIcon:({tintColor})=>(  
            <Icon name="satellite-uplink" color={tintColor} size={20}/>  
          )  
        }  
      }, 

      Community:{  
        screen:CommunityStoriesScreen,  
        navigationOptions:{  
          tabBarLabel:'Communitystories',  
          tabBarIcon:({tintColor})=>(  
              <Icon name="nature-people" color={tintColor} size={20}/>  
          )  
        }  
      }, 
      About:{  
        screen:AboutScreen,  
        navigationOptions:{  
          tabBarLabel:'About',  
          tabBarIcon:({tintColor})=>(  
              <Icon name="information" color={tintColor} size={20}/>  
          )  
        }  
      }, 

      Commodities: {  
        screen:CommoditiesDataScreen,  
        navigationOptions:{  
          tabBarLabel:'CommoditiesData',  
          tabBarIcon:({tintColor})=>(  
              <Icon name="database-check" color={tintColor} size={20}/>  
          )  
        }  
      }, 
      Contact:{  
        screen:ContactScreen,  
        navigationOptions:{  
          tabBarLabel:'Contact',  
          tabBarIcon:({tintColor})=>(  
              <Icon name="contacts" color={tintColor} size={20}/>  
          )  
        }  
      },  
    },  
    {  
      initialRouteName: "Home",
      headerLayoutPreset : 'center',
      defaultNavigationOptions : {
        headerTitle:<Image resizeMode="cover"  style={{ width: 150, height: 76 }} source={require("./mkulima-logo.png")} />,
        
      }



    }); 

const CardSection = (props) =>{
    return(
    <View style={styles.containerStyle}>
    {props.children}
    </View>
    );

}; 
const styles = StyleSheet.create({  
  container: {  
    flex: 1,  
    justifyContent: 'center', 
    backgroundColor: '#F5FCFF', 
    alignItems: 'center'  
  },

  container1: {
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
    logo2: {
    width: 150,
    height: 80
  },
  text10: {
    fontSize: 15,
    alignSelf: "flex-start",
    textAlign: "left",
    color: "#000000",
    fontWeight: "bold",
    paddingTop: 5
    
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },

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
  text4: {
    color: '#000',
    fontSize:30,
    fontWeight: 'bold',
    
  }, 

container3: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 20,
    paddingTop: 5
 
  },

  container4: {
    flex: 1,
    // justifyContent: "flex-start",
    alignItems: "center",
    
    
 
  },
  logo: {
    width: 350,
    height: 200
  },
  
 text3: {
    fontSize: 30,
    alignSelf: "center",
    fontFamily: "montserrat.regular",
    textAlign: "center",
    color: "#000000",
    fontWeight: "bold"
    
  },
   text1: {
    fontSize: 25,
    alignSelf: "flex-start",
    fontFamily: "montserrat.regular",
    textAlign: "left",
    color: "#000000",
    fontWeight: "bold",
    paddingTop: 5
    
  },
    text2: {
    fontSize: 17,
    alignSelf: "flex-start",
    fontFamily: "montserrat.regular",
    textAlign: "left",
    color: "#000000",
    fontWeight: "normal",
    paddingTop: 10
    
  },

  // logoContainer: {
  //   alignItems: "center",
  //   flexGrow: 1,
  //   justifyContent: "center",
  //   alignItems: "center"
  // },
   MainContainer: {
   flex: 1,
   justifyContent: 'center',
   
  marginBottom: 15,
  backgroundColor: "#ffffff"
   
 },
  logo: {
    width: 350,
    height: 200
  },
  text5: {
    fontSize: 18,
    alignSelf: "center",
    textAlign: "center",
    color: "#000000",
    fontWeight: "400"
    
  },

  input: {
    height: 40,
    width: 350,
    marginBottom: 10,
    backgroundColor: "rgba(255,255,255,0.2)",
    color: "#000000",
    paddingHorizontal: 10
  },
  input1: {
    height: 100,
    width: 350,
    marginBottom: 10,
    backgroundColor: "rgba(255,255,255,0.2)",
    color: "#000000",
    paddingHorizontal: 10
  },
  buttonContainer: {
    backgroundColor: "#014422",
    paddingVertical: 15
  },
  button: {
    height: 50,
    backgroundColor: "#7B4040",
    alignSelf: "stretch",
    marginTop: 10,
    justifyContent: "center",
    paddingVertical: 15,
    marginBottom: 10
  },
  keyboard: {
    margin: 5,
    padding: 5,
    // alignSelf: "stretch",
   
  },
  buttonText: {
    fontSize: 18,
    alignSelf: "center",
    textAlign: "center",
    color: "#ffffff",
    fontWeight: "700"
  },
   window: {
    marginBottom: 15,
    backgroundColor: "#ccc"

  },
  subtext: {
    color: "#ffffff",
    width: 160,
    textAlign: "center",
    fontSize: 35,
    fontWeight: "bold",
    marginTop: 20
  },
    container5: {
    flex: 1.2,
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 20,
 
  },
 
  window1: {
    marginBottom: 12,
    color:"white",
    backgroundColor: "#014422",
    width:200,
    height:100,

  },

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
    text7: {
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
});


const RootStack = createStackNavigator({
  
  Profile: { screen:Profile },
  Janet: { screen: Janet },
  John: { screen: John },
  Daniel: { screen: Daniel }
});

const App = createAppContainer(RootStack);




  
export default createAppContainer(TabNavigator);  