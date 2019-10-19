import React, { Component } from 'react'
import { View } from 'react-native'

import {
	ActivityIndicator,
	AsyncStorage,
	StatusBar,
	StyleSheet,
	View
} from "react-native";

class AuthLoadingScreen extends React.Component {
	componentDidMount() {
		this._bootstrapAsync();
	}

	// Fetch the token from storage then navigate to our appropriate place
	_bootstrapAsync = async () => {
		const user = await AsyncStorage.getItem("userId");

		// This will switch to the App screen or Auth screen and this loading
		// screen will be unmounted and thrown away.
		this.props.navigation.navigate(user ? "App" : "Auth");
	};

	render() {
		return (
			<View>
				<ActivityIndicator />
				<StatusBar barStyle="default" />
			</View>
		);
	}
}
export default AuthLoadingScreen