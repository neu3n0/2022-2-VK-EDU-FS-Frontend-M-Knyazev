import './App.css';
import React, { Component } from 'react';
import PageChatList from './pages/PageChatList/PageChatList';
import PageChat from './pages/PageChat/PageChat';
import PageProfile from './pages/PageProfile/PageProfile';
import PageLogin from './pages/PageLogin/PageLogin';
import PageCommonChat from './pages/PageCommonChat/PageCommonChat';

import { HashRouter, Routes, Route } from 'react-router-dom'
import { CentrifugoProvider } from './context/websocket'
import { Centrifuge } from 'centrifuge';

export default class App extends Component {


	constructor(props) {
		super(props);
        const centrifugo = new Centrifuge('ws://localhost:9000/connection/websocket');
        centrifugo.connect()
        // setCentrifugo(centrifugo)
		this.state = {
			currUser: {
				first_name: 'Scary',
				last_name: 'Kitty',
				username: 'kitty 322',
				description: 'mewmewmew',
			},
			centrifugo: centrifugo
		}
	}

	render() {
		console.log('wtf', this.state.centrifugo)
		return (
			<HashRouter>
				{/* <CentrifugoProvider> */}
				<Routes>
					<Route path='login' element={<PageLogin />} />
					<Route path='profile' element={<PageProfile user={this.state.currUser} setUser={(user) => {this.setState({currUser: user})}}/>} />
					<Route path='/' element={<PageChatList />} />
					<Route path='chats/:id' element={<PageChat centrifugo={this.state.centrifugo} />} />
					<Route path='chats/commonChat' element={<PageCommonChat/>} />
				</Routes>
				{/* </CentrifugoProvider> */}
			</HashRouter>
		);
	}
}