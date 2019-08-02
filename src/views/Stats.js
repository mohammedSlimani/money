import React, { Component } from 'react'
import {View,Text,Button} from 'react-native'


class Stats extends Component {
    render() {
        return (
            <View>
                <Text>
                    This is the statistic
                </Text>
                <Button
                    title="Go back"
                    onPress={()=>this.props.navigation.navigate("Home")}
                />
            </View>
        )
    }
}

export default Stats
