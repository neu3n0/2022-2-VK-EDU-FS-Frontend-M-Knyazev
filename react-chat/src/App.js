import './App.css';
import React, { Component } from 'react';
import PageChatList from './pages/PageChatList/PageChatList';
import PageChat from './pages/PageChat/PageChat';
import PageProfile from './pages/PageProfile/PageProfile';
import { chatsExample } from "./utils/chatListExample";
import { messagesExample } from "./utils/messagesListExample";

export default class App extends Component {


	constructor(props) {
		super(props);
		
		this.state = {
			chat_id: null,
		};

		if (!localStorage.getItem("chats")) {
			localStorage.setItem("chats", JSON.stringify(chatsExample))
		}
	
		if (!localStorage.getItem("messages")) {
			localStorage.setItem("messages", JSON.stringify(messagesExample));
		};
	}

	render() {
		return (
			<>
				{/* {
					this.state.chat_id === null ? 
					<PageChatList onClick={(chat_ind) => this.setState({ chat_id: chat_ind })} /> :
					<PageChat onClick={() => this.setState({ chat_id: null })} chat_id={this.state.chat_id} /> 
				} */}
				<PageProfile/>
			</>
		);
	}
}