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
      <div>
<Link className="link" to={`/course/${this.props.inputValue._id}`}>
<div class="card">
              <div class="card-header bg-primary">
                <h5>{this.props.inputValue.title}</h5>
                <h5>{this.props.inputValue.description}</h5>
                <h5>{this.props.inputValue.dayOfWeek} {this.props.inputValue.classStart}-{this.props.inputValue.classEnd}</h5>
              </div>
              <div class="card-body">
                <p class="card-text text-muted">
                  No New Questions | No New Answer | No New Notes
                </p>
              </div>
              <div class="card-footer text-muted"></div>
            </div>
            </Link>
            <br/>
      </div>
      
    );
  }
}
