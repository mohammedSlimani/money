import React, { Component } from 'react'
import {View,Text,Button} from 'react-native'


class Stats extends Component {
    static navigationOptions = {
        title:"Stats"
    }

    render() {
        return (
            <View>
                <Text>
                    This is the statistic
                </Text>
                <Button
                    title="Go back"
                    onPress={this.props.navigation.openDrawer}
                />
            </View>
        )
    }
}

export default Stats
