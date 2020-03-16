import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default class ProfileItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: []
    };
  }
  render() {
    return (
      <Card style={{ width: "20rem" }}>
        <Card.Body>
          <Card.Title>
            {this.props.inputValue.user.firstName}{" "}
            {this.props.inputValue.user.lastName}
          </Card.Title>
          <Card.Text>
            {" "}
            Department: {this.props.inputValue.department} <br />
            <Link
              to={`/instructor/${this.props.inputValue.user._id}`}
              className="btn btn-primary"
            >
              View Profile
            </Link>
          </Card.Text>
        </Card.Body>
      </Card>
    );
  }
}
