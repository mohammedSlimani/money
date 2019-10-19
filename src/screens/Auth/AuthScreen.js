import React from 'react'
import { Container, Text, Header, Body, Title, Left, Right, Button } from 'native-base';

class AuthScreen extends React.Component {
	
	render() {
		return (
			<Container>
				<Header>
					<Title>Please Sign in</Title>
				</Header>
				<Body>
					<Text>KEEP TRACK OF YOUR MONEY</Text>
					<Button >
						<Text>Login With FaceBook</Text>
					</Button>
				</Body>
			</Container>
		);
	}
}

export default AuthScreen;