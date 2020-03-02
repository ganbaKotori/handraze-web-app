import React, { Component } from "react";

export class CourseCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "f"
    };
  }
  render() {
    return (
      <div className={this.props.inputValue}>
        <div className="card-body">
          <h5 className="card-title">Political Science 101</h5>
          <p className="card-text">MW 7:30AM to 11:00AM</p>
        </div>
      </div>
    );
  }
}
