import React from "react";
import { Container, Text, Header, Body, Title, Button } from "native-base";

class AuthScreen extends React.Component {
	async _auth() {
		console.log("Authenticating...");
	}
	render() {
		return (
			<Container>
				<Header>
					<Title>Please Sign in</Title>
				</Header>
				<Body>
					<Text>KEEP TRACK OF YOUR MONEY</Text>
					<Button onPress={this._auth}>
						<Text>Login With FaceBook</Text>
					</Button>
				</Body>
			</Container>
		);
	}
}

export default AuthScreen;
