import React, { Component } from 'react'
import { Form, Icon, Input, Button, Row, Col, } from 'antd';
import io from "socket.io-client";
import { connect } from "react-redux";
import  moment  from "moment";

export class ChatPage extends Component {
    state= {
        chatMessage: "",
    }

    componentDidMount() {
        let server = "http://localhost:3000";

        this.socket = io(server);
        

        this.socket.on("Output Chat Message", messageFromBackEnd => {
            console.log(messageFromBackEnd)
        })
    }

    hanleSearchChange =(e) => {
        this.setState({
            chatMessage: e.target.value
        })
    }

    submitChatMessage = (e) => {
        e.preventDefault();
        {(console.log(this.props))}
        let chatMessage = this.state.chatMessage
        let userId = this.props.user1.user._id;
        let userName = this.props.user1.user.firstName;
        let userImage = this.props.user1.user.lastName;
        let nowTime = moment();
        let type = "Image"

        this.socket.emit("Input Chat Message", {
            chatMessage,
            userId,
            userName,
            userImage,
            nowTime,
            type
        });
        this.setState({ chatMessage: "" })
    }

    render() {
        return (
            <React.Fragment>
                <div>
                    
                    <p style={{ fontSize: '2rem', textAlign: 'center' }}> Real Time Chat</p>
                </div>

                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <div className="infinite-container">
                        {/* {this.props.chats && (
                            <div>{this.renderCards()}</div>
                        )} */}
                        <div
                            ref={el => {
                                this.messagesEnd = el;
                            }}
                            style={{ float: "left", clear: "both" }}
                        />
                    </div>

                    <Row >
                        <Form layout="inline" onSubmit={this.submitChatMessage}>
                            <Col span={18}>
                                <Input
                                    id="message"
                                    prefix="Message"
                                    placeholder="Let's start talking"
                                    type="text"
                                    value={this.state.chatMessage}
                                    onChange={this.hanleSearchChange}
                                />
                            </Col>
                            <Col span={2}>
                                
                            </Col>

                            <Col span={4}>
                                <Button type="primary" style={{ width: '100%' }} onClick={this.submitChatMessage}  htmlType="submit">
                                Enter
                                </Button>
                            </Col>
                        </Form>
                    </Row>
                </div>
                
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => {
    console.log(state)
    return {
        user1: state.auth
    }
    
}


export default connect(mapStateToProps)(ChatPage);