import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export class AnswerCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: [],
    };
  }

  render() {
    return (
      <Card>
        <Card.Header as="h5">Reply by {this.props.inputValue.name}</Card.Header>
        <Card.Body>
          <Card.Text>{this.props.inputValue.text}</Card.Text>
        </Card.Body>
      </Card>
    );
  }
}
