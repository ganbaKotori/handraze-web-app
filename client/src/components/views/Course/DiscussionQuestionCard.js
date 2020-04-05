import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export class DiscussionQuestionCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: []
    };
  }

  render() {
    var date = new Date(this.props.inputValue.dateSubmitted);
    return (
      <Link
        className="list-group-item list-group-item-action flex-column align-items-start"
        to={`/question/${this.props.inputValue._id}`}
      >
        <div class="d-flex w-100 justify-content-between">
          <h5 class="mb-1">{this.props.inputValue.question}</h5>
        </div>
        <span class="mb-1">{this.props.inputValue.description}</span>
        <p class="mb-1">
          Submitted by{" "}
          {this.props.inputValue.name
            ? this.props.inputValue.name
            : "NAME NOT FOUND"}
        </p>
        <p class="mb-1">{date.toDateString()}</p>
      </Link>
    );
  }
}
