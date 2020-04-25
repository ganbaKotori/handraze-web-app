import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import { startLecture } from "../../../actions/lecture";

const StartLecture = ({ startLecture, history }) => {
  const [formData, setFormData] = useState({
    topic: "",
    course: ""
  });

  const { topic, course } = formData;

  const onChange = e =>
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

  const onSubmit = e => {
    e.preventDefault();
    startLecture(formData, history)
  };

  return (
    <div class="container">
        <br/>
      <h5 class="modal-title">Start Lecture!</h5>
      <form className="form" onSubmit={e => onSubmit(e)}>
        <div className="form-group">
          <label for="text">
            Topic
          </label>
          <input
            type="text"
            className="form-control"
            id="topic"
            aria-describedby="emailHelp"
            name="topic"
            value={topic}
            onChange={e => onChange(e)}
            placeholder="topic"
            required
          />
        </div>
        <label for="text">
            Course
          </label>
          <input
            type="text"
            className="form-control"
            id="course"
            aria-describedby="emailHelp"
            name="course"
            value={course}
            onChange={e => onChange(e)}
            placeholder="ourse"
            required
          />
        <br/>
        <button type="submit" class="btn btn-danger">
          Begin Lecture
        </button>
      </form>
    </div>
  );
};

StartLecture.propTypes = {
    startLecture: PropTypes.func.isRequired
};

export default connect(null, { startLecture })(withRouter(StartLecture));