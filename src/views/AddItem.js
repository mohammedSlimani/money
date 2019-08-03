import React, { Component } from 'react'
import {
    View,
    Button,
    TextInput
} from 'react-native';

import firebase from "firebase"
import config from "./../config"

export class AddItem extends Component {
    static navigationOptions = {
        title:"Home"
    }

    constructor(props) {
        super(props);
        this.state = {
            item: "",
            price: ""
        }
        this.submit = this.submit.bind(this);
        this.reset = this.reset.bind(this);
    }

    componentDidMount() {
        console.log("mounting");
        firebase.initializeApp(config.firebaseConfig);
        console.log(firebase);
    }

    submit() {
        console.log(this.state);
        console.log(`adding the item ${this.state.item} with price ${this.state.price} `);
        //TODO: Use push instead of set...
        let payload = {
            "item": this.state.item,
            "price": this.state.price,
            "date": new Date()
        }
        firebase.database()
            .ref("items")
            .push(payload)
            .then((res) => console.log(res))
            .catch(err => console.log("err", err))
        this.reset();
    }

    reset() {
        this.setState({
            item: "",
            price: ""
        })
        this.itemInput.focus();
    }

    render() {
        return (
            <View>

                <View>
                    <TextInput
                        ref={(input) => { this.itemInput = input; }}
                        placeholder="Enter the Item"
                        value={this.state.item}
                        onSubmitEditing={() => { this.priceInput.focus(); }}
                        onChangeText={(item) => this.setState({ item })}
                        autoFocus
                        blurOnSubmit={false}
                    />
                    <TextInput
                        ref={(input) => { this.priceInput = input; }}
                        keyboardType="numeric"
                        value={this.state.price}
                        onChangeText={(price) => this.setState({ price })}
                        defaultValue="0"
                        placeholder="Enter the Price"
                        onSubmitEditing={this.submit}
                    />
                    <Button
                        title="Add Item"
                        onPress={this.submit}
                    />
                    <Button
                        title="see stats"
                        onPress={this.props.navigation.openDrawer}
                    />
                </View>
            </View>
        );
    }
}

export default AddItem
