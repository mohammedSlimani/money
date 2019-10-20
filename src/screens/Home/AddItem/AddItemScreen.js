import React, { Component } from "react";
import {
	Container,
	Text,
	Button,
	Icon,
	Left,
	Body,
	Header,
	Title,
	Input
} from "native-base";

export class AddItemScreen extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title: "",
			price: ""
		};
	}

	render() {
		return (
			<Container>
				<Header>
					<Left>
						<Button onPress={() => this.props.navigation.openDrawer()}>
							<Icon type="SimpleLineIcons" name="drawer" />
						</Button>
					</Left>
					<Body>
						<Title>Add Item</Title>
					</Body>
				</Header>
				<Body>
					<Input
						placeholder="Item Name"
						autoFocus="true"
						onChangeText={title => this.setState({ title })}
					/>
					<Input
						placeholder="price"
						keyboardType="decimal-pad"
						onChangeText={price => this.setState({ price })}
					/>
				</Body>

				<Button onPress={() => console.log("state", this.state)}>
					<Text>BO</Text>
				</Button>
			</Container>
		);
	}
}

export default AddItemScreen;
