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
          chatRoom: ""
      }
      }



    componentDidMount() {
        let server = "http://localhost:3000";
        this.props.dispatch(getChats(this.props.inputValue));
        this.socket = io(server);
        this.socket.on("Output Chat Message", messageFromBackEnd => {
            console.log(messageFromBackEnd)
            this.props.dispatch(afterPostMessage(messageFromBackEnd));
        })
    }

    hanleSearchChange =(e) => {
        this.setState({
            chatMessage: e.target.value
        })
    }
    renderCards = () =>
        this.props.chats.chats
        && this.props.chats.chats.map((chat) => (
            <ChatCard key={chat._id}  {...chat} />
        ));
        
    submitChatMessage = (e) => {
        e.preventDefault();
        {(console.log(this.props))}
        let chatMessage = this.state.chatMessage
        let userId = this.props.user1.user._id;
        let userName = this.props.user1.user.firstName;
        let userImage = this.props.user1.user.lastName;
        let room = this.props.inputValue;
        let nowTime = moment();
        let type = "Text"

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
                {console.log(this.props.inputValue)}
                <div >
            <div class="newsfeed">
            <div class="list-group notes-board"> {this.renderCards()}
                    <div
                        ref={el => {
                            this.messagesEnd = el;
                        }}
                        style={{ float: "left", clear: "both" }}
                    />
                    </div>
                   
                  <div className="list-group-item list-group-item-action flex-column align-items-start">
                  <Form layout="inline" onSubmit={this.submitChatMessage}>
                  <div class="input-group mb-3">
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