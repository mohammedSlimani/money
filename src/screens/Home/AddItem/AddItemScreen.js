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

	_submit(){
		console.log('Submitting ', this.state);	
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
						ref="titleInput"
						placeholder="Item Name"
						autoFocus
						onChangeText={title => this.setState({ title })}
						onSubmitEditing = { () => this.refs.priceInput._root.focus()}
					/>
					<Input
						ref='priceInput'
						placeholder="price"
						keyboardType="decimal-pad"
						onChangeText={price => this.setState({ price })}
						onSubmitEditing={()=> {
							this._submit();
							this.refs.titleInput._root.focus();
						}}
					/>
				</Body>

				<Button onPress={()=> this._submit()}>
					<Text>SEND</Text>
				</Button>
			</Container>
		);
	}
}

export default AddItemScreen;
