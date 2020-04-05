import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

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
        <Link className="link" to={`/course/${this.props.inputValue._id}`}>
          <Card.Body>
            <Card.Title>{this.props.inputValue.title}</Card.Title>
            <Card.Text>
              <p className="card-text">{this.props.inputValue.description}</p>
              <p className="card-text">
                Enrollment Code: {this.props.inputValue.code}
              </p>
            </Card.Text>
          </Card.Body>
        </Link>
      </Card>
    );
  }
}
