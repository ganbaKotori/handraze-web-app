import React, { Component } from "react";
import Popup from "../CreateCourse";

class CreateCourse extends Component {
  constructor(props) {
    super(props);
    this.state = { showPopup: false };
  }

  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup
    });
  }
  render() {
    return (
      <div class="container">
        <h3>
          <a href="#" onClick={this.togglePopup.bind(this)}>
            {" "}
            + create a course
          </a>
        </h3>
        <div class="row">
          <div class="col-sm-4">
            <div class="card">
              <div class="card-header bg-primary">
                <h5 class="">Introduction to Political Science</h5>
                <h5>MW 9:00am-12:00am</h5>
              </div>
              <div class="card-body">
                <p class="card-text text-muted">
                  2 New Questions | 1 New Answer | 3 New Notes
                </p>
              </div>
              <div class="card-footer text-muted"></div>
            </div>
          </div>
          <div class="col-sm-4">
            <div class="card">
              <div class="card-header bg-danger">
                <h5 class="">Introduction to Political Science</h5>
                <h5>MW 9:00am-12:00am</h5>
              </div>
              <div class="card-body">
                <p class="card-text text-muted">
                  2 New Questions | 1 New Answer | 3 New Notes
                </p>
              </div>
              <div class="card-footer text-muted"></div>
            </div>
          </div>
          <div class="col-sm-4">
            <div class="card">
              <div class="card-header bg-success">
                <h5 class="">Introduction to Political Science</h5>
                <h5>MW 9:00am-12:00am</h5>
              </div>
              <div class="card-body">
                <p class="card-text text-muted">
                  2 New Questions | 1 New Answer | 3 New Notes
                </p>
              </div>
              <div class="card-footer text-muted"></div>
            </div>
          </div>
        </div>
        {this.state.showPopup ? (
          <Popup
            text='Click "Close Button" to hide popup'
            closePopup={this.togglePopup.bind(this)}
          />
        ) : null}
      </div>
    );
  }
}

export default CreateCourse;
