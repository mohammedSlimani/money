import React, { Component } from 'react'
import {View,Text,Button} from 'react-native'

import firebase from "firebase"

class Stats extends Component {
    constructor(props){
        super(props);
        this.state = {
            items:null
        }
    }

    static navigationOptions = {
        title:"Stats"
    }

    async componentDidMount(){
        let myItems=null;
        let db = firebase.database()
        let itemRef = db.ref().child("items");
        await itemRef.orderByChild("item").once("value").then(data => myItems = data.val());
        this.setState({
            items:myItems
        })
        console.log("Data has been loaded", this.state.items)
    }

    render() {
        return (
            <View>
                <Text>
                    This is the statistic
                </Text>
                <Button
                    title="Go back"
                    onPress={()=>this.props.navigation.navigate('ItemRT')}
                />
            </View>
        )
    }
}

export default Stats
