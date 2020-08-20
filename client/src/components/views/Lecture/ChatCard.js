import React from "react";
import moment from 'moment';
import { Comment, Tooltip, Avatar } from 'antd';

function ChatCard(props) {
    return (
        <a
                href="#"
                class="list-group-item list-group-item-action flex-column align-items-start "
              >
                <p class="mb-1"><b>{props.type == "Anonymous" ? "Anonymous" : props.sender.firstName ? props.sender.firstName : "Guest"}:</b>{"  "} {props.message}</p>
              </a>
        
    )
}

export default ChatCard;
