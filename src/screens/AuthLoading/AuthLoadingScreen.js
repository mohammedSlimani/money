import React from "react";
import { Container, Spinner } from "native-base";
import AsyncStorage  from "@react-native-community/async-storage";

class AuthLoadingScreen extends React.Component {
	componentDidMount() {
		this._checkUser();
	}

	async _checkUser() {
		const user = await AsyncStorage.getItem("user");
		this.props.navigation.navigate(user ? "Home" : "Auth");
	}

	render() {
		return (
			<Container>
				<Spinner />
			</Container>
		);
	}
}
export default AuthLoadingScreen;
