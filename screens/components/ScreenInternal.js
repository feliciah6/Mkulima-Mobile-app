/*Example to open a screen out of the Navigation Drawer*/
import React, { Component } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

export default class ScreenInternal extends Component {
  render() {
    return (
      <View style={{ padding: 20 }}>
        <Text style={{ padding: 30 }}>
          Switched Screen Which is in the Navigation Drawer
        </Text>
        <Button
          title="Go to Screen1"
          onPress={() => this.props.navigation.navigate('Screen1')}
        />
      </View>
    );
  }
}
