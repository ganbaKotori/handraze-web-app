import React from "react";
import moment from 'moment';
import { Comment, Tooltip, Avatar } from 'antd';
import {ListGroup} from "react-bootstrap"

function ChatCard(props) {
    return (
      <ListGroup.Item>
           <p class="mb-1"><b>{props.type == "Anonymous" ? "Anonymous" : props.sender.firstName ? props.sender.firstName : "Guest"}:</b>{"  "} {props.message}</p>
      </ListGroup.Item>
        
    )
}

export default ChatCard;
