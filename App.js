/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React,{ Fragment, Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  TextInput
} from 'react-native';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      item : "",
      price:""
    }
  }
  render(){
    return (
      <View>
        
        <View>
        <TextInput
          placeholder="Enter the Item"
          value={this.state.item}
          onChangeText={(item)=>this.setState({item})}
        />
        <TextInput
          keyboardType="numeric"
          value={this.state.price}
          onChangeText={(price)=>this.setState({price})}
          defaultValue="0"
          autoFocus
          placeholder="Enter the Price"
        />
        </View>
      </View>
    );
  }
};


export default App;
