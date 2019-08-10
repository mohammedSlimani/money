import React, { Component } from 'react'
import {
    View,
    Button,
    TextInput
} from 'react-native';
import DB from '../services/DB';

export class AddItem extends Component {
    static navigationOptions = {
        title: "Home"
    }

    DB = new DB();

    constructor(props) {
        super(props);
        this.state = {
            item: "",
            price: ""
        }
    }

    submit = () => {
        console.log(`adding the item ${this.state.item} with price ${this.state.price} `);
        this.DB.addItem(this.state.item, this.state.price);
        this.reset();
    }

    reset = () => {
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
                        onPress={() => this.props.navigation.navigate('StatsRT')}
                    />
                </View>
            </View>
        );
    }
}

export default AddItem
