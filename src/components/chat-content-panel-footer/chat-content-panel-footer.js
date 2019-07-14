
import React, {Component} from "react";
import {messageAdded} from '../../actions';
import { connect } from 'react-redux';
import "./chat-content-panel-footer.css";


 class ChatContentPanelFooter extends Component{

    state = {
        text: ''
    }

    
     onSendClick = () => {
        const {text} = this.state;
    
        if (text.length === 0){
            return;
        }

        let date = new Date().toLocaleString();
     
        let id = Math.floor(Math.random() * (50000000 - 1) ) + 1
  
        const {addMessage} = this.props;
        addMessage({ key: id,
                   id: id,
                   user: 'current',
                    message:text,
                    created_at: date
                   });

        this.setState({text:''});  
       }

       onChangeTextBox = (event) =>{
        const text = event.target.value;
         this.setState({text});
       }

    render () {
       const {id} = this.props;
    
             return (
             <div className="chatContentPanelFooterWrapper">
                <input onChange ={this.onChangeTextBox } value = {this.state.text}  id='messageText' className="messageText" type="text" placeholder="message" name="message" required></input>
                <button onClick = {() => this.onSendClick(id)}>Send</button>
           </div>);
    }
           
};


const mapDispatchToProps = (dispatch) => {

    return {
      addMessage: (message) => dispatch(messageAdded(message)),
    };
  };

  
  export default connect(null,mapDispatchToProps)(ChatContentPanelFooter);
  
  
