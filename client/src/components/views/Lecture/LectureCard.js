import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export class LectureCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: []
    };
    
  }

  render() {
    return (
      <Link
        className="list-group-item list-group-item-action flex-column align-items-start"
        target="_blank"
        to={`/lecture/${this.props.inputValue._id}`}
      >
        <div class="d-flex w-100 justify-content-between">
          <h5 class="mb-1">{this.props.inputValue.topic}</h5>
        </div>
        <span class="mb-1">{this.props.inputValue.course}</span>
      </Link>
    );
  }
}
