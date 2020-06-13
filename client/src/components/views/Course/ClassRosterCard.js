import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export class ClassRosterCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
        classRoster: []
    };
    
  }

  render() {
    return (
      <Link
        className="list-group-item list-group-item-action flex-column align-items-start"
        target="_blank"
        to={`/student/${this.props.classRoster.user._id}`}
      >
        <div class="d-flex w-100 justify-content-between">
          <h5 class="mb-1">{this.props.classRoster.user.firstName}  {this.props.classRoster.user.lastName}</h5> {this.props.classRoster.sessionEnd? <span>Live Now!</span>: (<span></span>)}
        </div>
        
      </Link>
    );
  }
}
