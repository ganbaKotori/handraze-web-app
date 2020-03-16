import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";

export class InstructorCourseCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: []
    };
  }
  render() {
    return (
      <Card style={{ width: "30rem" }} className="bg-success">
        <Card.Body>
          <Card.Title>{this.props.inputValue.title}</Card.Title>
          <Card.Text>
            <p className="card-text">{this.props.inputValue.description}</p>
            <p className="card-text">
              Enrollment Code: {this.props.inputValue.code}
            </p>
          </Card.Text>
        </Card.Body>
      </Card>
    );
  }
}
