import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { enrollCourse } from "../../../actions/profile";
import { Link, withRouter } from "react-router-dom";

const EnrollCourse2 = ({ enrollCourse, history }) => {
  const [formData, setFormData] = useState({
    code: ""
  });

  const { code } = formData;

  const onChange = e =>
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

  const onSubmit = e => {
    e.preventDefault();
    enrollCourse(formData, history);
  };

  return (
    <div class="container">
      <br />
      <br />
      <br />
      <br />
      <br />
      <h5 class="modal-title">Enroll in a new course</h5>
      <form className="form" onSubmit={e => onSubmit(e)}>
        <div className="form-group">
          <label for="text">
            Enter the Enrollment Code provided by your Instructor
          </label>
          <input
            type="text"
            className="form-control"
            id="code"
            aria-describedby="emailHelp"
            name="code"
            value={code}
            onChange={e => onChange(e)}
            placeholder="5-digit code"
            required
          />
        </div>
        <button type="submit" class="btn btn-danger">
          Enroll
        </button>
      </form>
    </div>
  );
};

EnrollCourse2.propTypes = {
  enrollCourse: PropTypes.func.isRequired
};

export default connect(null, { enrollCourse })(withRouter(EnrollCourse2));
