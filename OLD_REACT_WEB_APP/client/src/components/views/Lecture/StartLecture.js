import React, { useState, useEffect  } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import { startLecture } from "../../../actions/lecture";

const StartLecture = ({ startLecture, history, match }) => {
  const [course, setId] = useState(2);
  useEffect(() => {
    setId(match.params.id);
    console.log(course);
  }, null);
  const [formData, setFormData] = useState({
    topic: "",
    course: ""
  });

  const { topic } = formData;

  const onChange = e =>
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

  const onSubmit = e => {
    e.preventDefault();
    startLecture({topic, course}, history)
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