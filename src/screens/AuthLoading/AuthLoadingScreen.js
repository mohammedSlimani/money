import React from 'react'
import { Container, Spinner } from 'native-base';

class AuthLoadingScreen extends React.Component {
	render() {
		return (
			<Container>
                <Spinner/>
			</Container>
		);
	}
}
export default AuthLoadingScreen