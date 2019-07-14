import React, {Component} from "react";
import './chat.css';
import Header  from '../header' ;
import Footer  from '../footer' ;
import ChatContentPanel from '../chat-content-panel';

  class Chat extends Component{

  
  render(){

      return (<div>
                 <Header />
                   <ChatContentPanel chatService ={this.props.chatService}  />}
                 <Footer/>
            </div>)
  }
}

export default Chat;