
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  Image,
  View,
  StatusBar
} from 'react-native';

import Welcome from './screens/components/Welcome';
import ActionBarImage from './screens/components/ActionBarImage';
import Profile from './screens/components/Profile';
import Menu from './screens/components/Menu';
import Contact from './screens/components/Contact';
import Splash from './screens/components/Splash';
import About from './screens/components/About';
import { createStackNavigator, createAppContainer } from "react-navigation";

class SplashScreen extends React.Component {
  render() {
    const viewStyles = [styles.container, { backgroundColor: 'white' }];
    const textStyles = {
      color: 'black',
      fontSize: 30,
      fontWeight: 'bold',
      textAlign:'center',
      paddingTop:300

    };

    return (
      <View style={viewStyles}>
        <Text style={textStyles}>

          Welcome to Mkulima

       <Image style={styles.logo2} source={require("./screens/components/mkulima-logo.png")} />
        </Text>
      </View>
    );
  }
}





export default class Home extends Component<{}> {

    constructor(props) {
    super(props);

    this.state = { isLoading: true }
  }

    performTimeConsumingTask = async() => {
    return new Promise((resolve) =>
      setTimeout(
        () => { resolve('result') },
        2000
      )
    );
  }


    async componentDidMount() {
    const data = await this.performTimeConsumingTask();

    if (data !== null) {
      this.setState({ isLoading: false });
    }
  }

  render() {

    if (this.state.isLoading) {
      return <SplashScreen />;
    }


    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor="#014422" />
        <Welcome navigation={this.props.navigation} />
      </View>
    );
  }
}



const RootStack = createStackNavigator({
  Home: {
    screen: Home,
    title: 'Home Activity',
    headerLeft: null
    
  },
  Welcome: {
    screen: Welcome,
    headerLeft: null
   
   
  },
  Profile: {
    screen: Profile,
    headerLeft: null
   
    
  },
   Menu: {
    screen: Menu,
    headerLeft: null
    
   
  },
  Splash: {
    screen: Splash,
   
  
  },
 
 
});

const App = createAppContainer(RootStack);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    

  },
   logo2: {
    width: 150,
    height: 80
  }
});