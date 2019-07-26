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
    this.submit = this.submit.bind(this);
    this.reset = this.reset.bind(this);
  }

  submit(){
    console.log("submitting");
    console.log(this.state);
    console.log(`adding the item ${this.state.item} with price ${this.state.price} `);
    this.reset();
  }

  reset(){
    this.setState({
      item: "",
      price: ""
    })
    this.itemInput.focus();
  }

  render(){
    return (
      <View>
        
        <View>
        <TextInput
          ref={(input) => { this.itemInput = input; }}
          placeholder="Enter the Item"
          value={this.state.item}
          onSubmitEditing={() => { this.priceInput.focus(); }}
          onChangeText={(item)=>this.setState({item})}
          autoFocus
          blurOnSubmit={false}
        />
        <TextInput
          ref={(input) => { this.priceInput = input; }}
          keyboardType="numeric"
          value={this.state.price}
          onChangeText={(price)=>this.setState({price})}
          defaultValue="0"
          placeholder="Enter the Price"
          onSubmitEditing={this.submit}
        />
        <Button
          title="Add Item"
          onPress={this.submit}
        />
        </View>
      </View>
    );
  }
};


export default App;
