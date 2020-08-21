import React, { Component } from "react";
import io from "socket.io-client";
import { connect } from "react-redux";
import moment from "moment";
import { getChats, afterPostMessage } from "../../../actions/chat";
import ChatCard from "./ChatCard";
import { FormControl, InputGroup, ListGroup, Button, Container, Row, Col, DropdownButton, Dropdown } from "react-bootstrap";

export class ChatPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPopup: false,
      inputValue: "",
      chatMessage: "",
      chatRoom: "",
      value: "Self",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  scrollToBottom = () => {
    if (this.messageList != undefined) {
      const scrollHeight = this.messageList.scrollHeight;
      const height = this.messageList.clientHeight;
      const maxScrollTop = scrollHeight - height;
      this.messageList.scrollTop = maxScrollTop;
    }
  };
  componentDidMount() {
    this.scrollToBottom();
    let server = "http://localhost:3000";
    this.props.dispatch(getChats(this.props.inputValue));
    this.socket = io();
    this.socket.on("Output Chat Message", (messageFromBackEnd) => {
      console.log(messageFromBackEnd);
      this.props.dispatch(afterPostMessage(messageFromBackEnd));
      this.scrollToBottom();
    });
  }

  hanleSearchChange = (e) => {
    this.setState({
      chatMessage: e.target.value,
    });
    this.scrollToBottom();
  };
  renderCards = () =>
    this.props.chats.chats &&
    this.props.chats.chats.map((chat) => <ChatCard key={chat._id} {...chat} />);

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  submitChatMessage = (e) => {
    e.preventDefault();
    {
      console.log(this.props);
    }
    let chatMessage = this.state.chatMessage;
    let userId =
      this.props.user1.user != null ? this.props.user1.user._id : "0";
    let userName =
      this.props.user1.user != null ? this.props.user1.user.firstName : "guest";
    let userImage =
      this.props.user1.user != null ? this.props.user1.user.lastName : "guest2";
    let room = this.props.inputValue;
    let nowTime = moment();
    var type = this.state.value;

    this.socket.emit("Input Chat Message", {
      chatMessage,
      userId,
      userName,
      userImage,
      nowTime,
      room,
      type,
    });
    this.setState({ chatMessage: "" });
  };

  render() {
    return (
      <Container>
          <Row>
            <Col>
            <ListGroup>{this.renderCards()}</ListGroup>
        <InputGroup className="mb-3">
          <FormControl
            placeholder="Enter a message."
            id="message"
            type="text"
            value={this.state.chatMessage}
            onChange={this.hanleSearchChange}
          />
          <InputGroup.Append>
            <Button
              variant="outline-secondary"
              onClick={this.submitChatMessage}
            >
              send
            </Button>
          </InputGroup.Append>
        </InputGroup>

          </Col>
         
          </Row>
          <Row>
          </Row>
        
        <label class="input-group-text" for="inputGroupSelect01">Send As</label>
                    <select class="custom-select" id="inputGroupSelect01" value={this.state.value} onChange={this.handleChange}>
                        <option selected>Choose...</option>
                        <option value={"Self"}>Self</option>
                        <option value={"Anonymous"}>Anonymous</option>
                        
                    </select>
                    </Container>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    user1: state.auth,
    chats: state.chat,
  };
};
export default connect(mapStateToProps)(ChatPage);
