import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export class CourseCard extends Component {
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
              <p className="card-text">MW 7:30AM to 11:00AM</p>
            </Card.Text>
          </Card.Body>
        </Link>
      </Card>
    );
  }
}
