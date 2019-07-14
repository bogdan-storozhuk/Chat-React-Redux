import React,{Component} from 'react';
import { connect } from 'react-redux';
import ChatContentPanelHeader from '../chat-content-panel-header';
import ChatContentPanelBody from '../chat-content-panel-body';
import ChatContentPanelFooter from '../chat-content-panel-footer';
import Spinner from '../spinner';
import EditMessagePopup  from '../edit-message-popup/'
import {fetchMessages} from '../../actions';
import "./chat-content-panel.css";

class ChatContentPanel extends Component {

    componentDidMount(){
        this.props.fetchMessages();
      }

render(){

   const  {loading } = this.props;
        return (<div className='ChatContentPanelWrapper'>
                   <ChatContentPanelHeader/>
                   {!loading? <ChatContentPanelBody/> : <Spinner/>}
                   <EditMessagePopup/>
                   <ChatContentPanelFooter  />
               </div>);
    };
}

const mapStateToProps = ({  loading}) => {
    return {  loading, };
  };
  
  const mapDispatchToProps = (dispatch, { chatService }) => {
  
    return {
      fetchMessages:  fetchMessages(chatService, dispatch),
    };
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(ChatContentPanel);
