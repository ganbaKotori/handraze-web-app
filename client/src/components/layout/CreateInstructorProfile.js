import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createProfile } from "../../actions/profile";
import { Link, withRouter } from "react-router-dom";

const CreateProfile = ({ createProfile, history }) => {
  const [formData, setFormData] = useState({
    department: ""
  });

  const { department } = formData;

  const onChange = e =>
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

  const onSubmit = e => {
    e.preventDefault();
    createProfile(formData, history);
  };
  return (
    <Fragment>
      <h2> Create Instructor Profile </h2>
      <p>
        {" "}
        Enter your information below to make an account and get started with
        Handraze.
      </p>

      <form className="form" onSubmit={e => onSubmit(e)}>
        <div className="form-group">
          <label for="department">Department</label>
          <input
            type="department"
            className="form-control"
            id="department"
            aria-describedby="emailHelp"
            placeholder="Enter your Department"
            name="department"
            value={department}
            onChange={e => onChange(e)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </Fragment>
  );
};

CreateProfile.propTypes = {
  createProfile: PropTypes.func.isRequired
};

export default connect(null, { createProfile })(withRouter(CreateProfile));