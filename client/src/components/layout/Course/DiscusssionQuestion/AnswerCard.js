import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export class AnswerCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: []
    };
  }

  render() {
    return (
      <div class="card lecture-card">
              <div class="card-body">
                <b>{this.props.inputValue.name} Replied: </b>
                {this.props.inputValue.text}
              </div>
            </div>
    );
  }
}
