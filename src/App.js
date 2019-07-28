/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React,{ Fragment, Component} from 'react';
import {
  View,
  Button,
  TextInput
} from 'react-native';

import firebase from "firebase"
import config from "./config"

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

  componentDidMount(){
    console.log("mounting");
    firebase.initializeApp(config.firebaseConfig);
    console.log(firebase);
  }

  submit(){
    console.log(this.state);
    console.log(`adding the item ${this.state.item} with price ${this.state.price} `);
    //TODO: Use push instead of set...
    firebase.database()
        .ref("items")
        .push({"item":this.state.item, "price":this.state.price})
        .then((res)=>console.log(res))
        .catch(err=>console.log("err",err))
    this.reset();
  }

  reset(){
    console.log("resetting the State");
    let db = firebase.database()
    let itemRef = db.ref().child("items");
    itemRef.orderByChild("item").once("value").then(data=>console.log(data.val()))

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
