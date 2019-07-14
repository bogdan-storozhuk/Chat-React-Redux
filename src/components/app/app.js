import React, {Component} from "react";

import Chat from '../chat';
import ChatService from '../../services';
import './app.css';
import ErrorBoundry from '../error-boundry';
export default class App extends Component{

  
  state = {
    chatService : new ChatService(),
  };
 
  
  render(){
     
    return (
      <ErrorBoundry>
        <Chat chatService = {this.state.chatService}/>
        </ErrorBoundry>
    );
  }
}