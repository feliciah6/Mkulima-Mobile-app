import React, { Component } from 'react';
//import react in our code.

import { StyleSheet, WebView, AppRegistry, ActivityIndicator, View } from 'react-native';
//import all the components we are going to use.

export default class Soy extends Component {
  constructor(props) {
    super(props);
    this.state = { visible: true };
  }

  showSpinner() {
    console.log('Show Spinner');
    this.setState({ visible: true });
  }

  hideSpinner() {
    console.log('Hide Spinner');
    this.setState({ visible: false });
  }

  render() {
    return (
      <View
        style={this.state.visible === true ? styles.stylOld : styles.styleNew}>
        {this.state.visible ? (
          <ActivityIndicator
            color="#000000"
            size="large"
            style={styles.ActivityIndicatorStyle}
          />
        ) : null}

        <WebView
          style={styles.WebViewStyle}
          //Loading URL
          source={{ uri: 'https://datalocal.info/mkulima/index.php?pg=crop-db&comm_id=36' }}
          //Enable Javascript support
          javaScriptEnabled={true}
          //For the Cache
          domStorageEnabled={true}
          //View to show while loading the webpage
          //Want to show the view or not
          //startInLoadingState={true}
          onLoadStart={() => this.showSpinner()}
          onLoad={() => this.hideSpinner()}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  stylOld: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  styleNew: {
    flex: 1,
  },
  WebViewStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    marginTop: 40,
  },
  ActivityIndicatorStyle: {
    flex: 1,
    padding: 20
    
  },
});

AppRegistry.registerComponent('Soy', () => Soy);