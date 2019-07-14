import React, {Component} from "react";
import ReactDOM from "react-dom";

import Chat from '../chat';
import ChatService from '../../services';
import withChatService from '../../components/hoc-helpers/withChatService';
import {ChatServiceProvider} from '../chat-service-context'
import {ChatServiceConsumer} from '../chat-service-context';
import './app.css';


export default class App extends Component{

  
  state = {
    chatService : new ChatService(),
  };
 
  
  render(){
     
    return (
        <Chat chatService = {this.state.chatService}/>
    );
  }
}