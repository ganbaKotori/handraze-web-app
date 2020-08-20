import React, { Component } from 'react'
import { Form, Icon, Input, Button, Row, Col, } from 'antd';
import io from "socket.io-client";
import { connect } from "react-redux";
import  moment  from "moment";
import { getChats, afterPostMessage  } from "../../../actions/chat";
import  ChatCard  from "./ChatCard";

export class ChatPage extends Component {
    constructor(props) {
        super(props);
        this.state = { showPopup: false,
          inputValue: "",
          chatMessage: "",
          chatRoom: "",
          value: "Self"
         }
    this.handleChange = this.handleChange.bind(this);
      }

    scrollToBottom = () => {
        if(this.messageList != undefined){

        
        const scrollHeight = this.messageList.scrollHeight;

        const height = this.messageList.clientHeight;

        const maxScrollTop = scrollHeight - height;
        
        this.messageList.scrollTop = maxScrollTop;
        }

    
    }
    componentDidMount() {
        this.scrollToBottom();
        let server = "http://localhost:3000";
        this.props.dispatch(getChats(this.props.inputValue));
        this.socket = io();

        this.socket.on("Output Chat Message", messageFromBackEnd => {
            console.log(messageFromBackEnd)
            this.props.dispatch(afterPostMessage(messageFromBackEnd));
            this.scrollToBottom();
        })

    }

    hanleSearchChange =(e) => {
        this.setState({
            chatMessage: e.target.value
        })
        this.scrollToBottom();



    }
    renderCards = () =>
        
        this.props.chats.chats
        && this.props.chats.chats.map((chat) => 
        (

            <ChatCard key={chat._id}  {...chat} />
            
        )
    );

    handleChange(event) {
        this.setState({value: event.target.value});
      }
        
    submitChatMessage = (e) => {
        e.preventDefault();
        {(console.log(this.props))}
        let chatMessage = this.state.chatMessage
        let userId = (this.props.user1.user !=null ? this.props.user1.user._id : "0");
        let userName =  (this.props.user1.user !=null ? this.props.user1.user.firstName : "guest");
        let userImage = (this.props.user1.user !=null? this.props.user1.user.lastName : "guest2");
        let room = this.props.inputValue;
        let nowTime = moment();
        var type =this.state.value ;

        this.socket.emit("Input Chat Message", {
            chatMessage,
            userId,
            userName,
            userImage,
            nowTime,
            room,
            type
        });
        this.setState({ chatMessage: "" })
    }

    render() {
        return (
            <React.Fragment>
                {console.log(this.props.inputValue) }
                <div >
            <div class="newsfeed">
            <div class="list-group notes-board" ref={(div) => {
          this.messageList = div;
        }}> 
                    {this.renderCards()}
                    
            </div>
                   
                  <div className="list-group-item list-group-item-action flex-column align-items-start">
                  <Form layout="inline" onSubmit={this.submitChatMessage}>
                  <div class="input-group ">

                
                  <input
      
                    class="form-control form-control-lg"
                    placeholder="Enter a message."
                    id="message"
                    prefix={"test"}
                    type="text"
                    value={this.state.chatMessage}
                    onChange={this.hanleSearchChange}
                  />
                    
                  <div class="input-group-prepend">
                    <button
                      class="btn btn-outline-secondary"
                      type="button"
                      id="button-addon1"
                      type="primary" style={{ width: '100%' }} 
                      onClick={this.submitChatMessage} 
                      htmlType="submit"
                    >
                      Send {this.state.inputValue}
                    </button>
                    
                  </div>
                </div>

                <div class="input-group input-group-sm mb-3"  style={{width:"90%",margin:"auto", paddingTop:"5px"}}>
                    <div class="input-group-prepend">
                        <label class="input-group-text" for="inputGroupSelect01">Send As</label>
                    </div>
                    <select class="custom-select" id="inputGroupSelect01" value={this.state.value} onChange={this.handleChange}>
                        <option selected>Choose...</option>
                        <option value={"Self"}>Self</option>
                        <option value={"Anonymous"}>Anonymous</option>
                        
                    </select>
                    </div>
                    </Form>
                  </div>
            </div>
            </div>
        </React.Fragment>
        )
    }
}

const mapStateToProps = state => {
    
    console.log(state)
    
    return {
        user1: state.auth,
        chats: state.chat
    }
    
}

export default connect(mapStateToProps)(ChatPage);