import './App.css';
import React, { Component } from 'react';
import PageChatList from './pages/PageChatList/PageChatList';
import PageChat from './pages/PageChat/PageChat';


export default class App extends Component {


	constructor(props) {
		super(props);
		
		this.state = {
			chat_id: null,
		};

	}

	render() {
		console.log(this.state);
		return (
			<>
				{
					this.state.chat_id === null ? 
					<PageChatList onClick={(chat_ind) => this.setState({ chat_id: chat_ind })} /> :
					<PageChat onClick={() => this.setState({ chat_id: null })} chat_id={this.state.chat_id} /> 
				}
			</>
		);
	}
}