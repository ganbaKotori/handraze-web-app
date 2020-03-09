import React, { Component, useState } from "react";

import { Modal, Button, Row, Col, Form } from "react-bootstrap";

export class CreateCourseModal extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Modal
        {...this.props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            <h2> Create Course</h2>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="container">
            <p> Enter your information about the course.</p>
            <form className="form">
              <div className="form-group">
                <label for="title">Title</label>
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  name="title"
                  placeholder="Enter course title"
                  required
                />
              </div>
              <div className="form-group">
                <label for="description">Description</label>
                <input
                  type="text"
                  className="form-control"
                  id="description"
                  name="description"
                  placeholder="Describe what the course is about"
                  required
                />
              </div>
              <div className="form-group">
                <label for="email">Class Duration</label>
                <input
                  type="text"
                  className="form-control"
                  id="duration"
                  name="duration"
                  placeholder="How long is each class session?"
                  required
                />
              </div>

              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="tosCheck"
                />
                <label className="form-check-label" for="tosCheck">
                  Monday
                </label>
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="tosCheck"
                />
                <label className="form-check-label" for="tosCheck">
                  Tuesday
                </label>
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="tosCheck"
                />
                <label className="form-check-label" for="tosCheck">
                  Wednesday
                </label>
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="tosCheck"
                />
                <label className="form-check-label" for="tosCheck">
                  Thursday
                </label>
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="tosCheck"
                />
                <label className="form-check-label" for="tosCheck">
                  Friday
                </label>
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="tosCheck"
                />
                <label className="form-check-label" for="tosCheck">
                  Saturday
                </label>
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="tosCheck"
                />
                <label className="form-check-label" for="tosCheck">
                  Sunday
                </label>
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="tosCheck"
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}
