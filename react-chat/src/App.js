import './App.css';
import React, { Component } from 'react';
import PageChatList from './pages/PageChatList/PageChatList';
import PageChat from './pages/PageChat/PageChat';


export default class App extends Component {

	constructor(props) {
		super(props);

		// this.pageChatList = <PageChatList chatClick={(chat_id) => this.setState({page: this.pageChat, chat_id: chat_id})}/>
		// this.pageChat = <PageChat backButtonClick={() => this.setState({page: this.pageChatList, chat_id: null})}/>

		this.pageChatList = <PageChatList onClick={() => this.setState({ page: this.pageChat })} />
		this.pageChat = <PageChat onClick={() => this.setState({ page: this.pageChatList })} />


		this.state = {
			page: this.pageChatList,
			chat: null,
		};
	}

	render() {
		return (
			<>{this.state.page}</>
		);
	}
}