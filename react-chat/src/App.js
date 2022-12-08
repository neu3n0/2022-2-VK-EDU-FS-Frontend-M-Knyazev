import './App.css';
import React, { Component } from 'react';
import PageChatList from './pages/PageChatList/PageChatList';
import PageChat from './pages/PageChat/PageChat';
import PageProfile from './pages/PageProfile/PageProfile';
import PageLogin from './pages/PageLogin/PageLogin';
import PageCommonChat from './pages/PageCommonChat/PageCommonChat';
import { chatsExample } from "./utils/chatListExample";
import { messagesExample } from "./utils/messagesListExample";

import { HashRouter, Routes, Route } from 'react-router-dom'

export default class App extends Component {


	constructor(props) {
		super(props);

		this.state = {
			currUser: {
				fullname: 'Scary Kitty',
				username: 'kitty 322',
				description: 'mewmewmew',
			}
		}
	}

	render() {
		return (
			<HashRouter>
				<Routes>
					<Route path='/login' element={<PageLogin />} />
					<Route path='profile' element={<PageProfile user={this.state.currUser} setUser={(user) => {this.setState({currUser: user})}}/>} />
					<Route path='/' element={<PageChatList />} />
					<Route path='chats/:id' element={<PageChat />} />
					<Route path='chats/commonChat' element={<PageCommonChat/>} />
				</Routes>
			</HashRouter>
		);
	}
}