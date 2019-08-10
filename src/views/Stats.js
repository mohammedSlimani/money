import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'
import DB from '../services/DB';

class Stats extends Component {
    static navigationOptions = {
        title: "Stats"
    }

    DB = new DB();
    constructor(props) {
        super(props);
        this.state = {
            items: null
        }
    }

    getStats = async () => {
        const items = await this.DB.getAllItems();
        console.log('Got all the items', items);
    }

    render() {
        return (
            <View>
                <Text>
                    This is the statistic
                </Text>
                <Button
                    title="All items"
                    onPress={() => { this.getStats() }}
                />
                <Button
                    title="Go back"
                    onPress={() => this.props.navigation.navigate('ItemRT')}
                />
            </View>
        )
    }
}

export default Stats
