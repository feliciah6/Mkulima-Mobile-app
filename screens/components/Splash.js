import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class SplashScreen extends React.Component {
  render() {
    const viewStyles = [styles.container, { backgroundColor: 'orange' }];
    const textStyles = {
      color: 'white',
      fontSize: 40,
      fontWeight: 'bold'
    };

    return (
      <View style={viewStyles}>
        <Text style={textStyles}>
          Splash Screen
        </Text>
      </View>
    );
  }
}

export default class Splash extends React.Component {
  constructor(props) {
    super(props);

    this.state = { isLoading: true }
  }

  performTimeConsumingTask = async() => {
    return new Promise((resolve) =>
      setTimeout(
        () => { resolve('result') },
        5000
      )
    );
  }

  async componentDidMount() {
    // Preload data from an external API
    // Preload data using AsyncStorage
    const data = await this.performTimeConsumingTask();

    if (data !== null) {
      this.props.navigation.navigate('App');
    }
  }

  render() {
    

    return (

        <View style={styles.viewStyles}>
        <Text style={styles.textStyles}>
          Welcome to Mkulima App
        </Text>
      </View>
     
    );
  }
}

const styles = StyleSheet.create({
  viewStyles: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'orange'
  },
  textStyles: {
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold'
  }
});

// export default Splash

// AppRegistry.registerComponent('Splash',()=>Splash);