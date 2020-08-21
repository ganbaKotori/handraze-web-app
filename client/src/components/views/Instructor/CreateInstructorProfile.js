import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createProfile } from "../../../actions/profile";
import { Link, withRouter } from "react-router-dom";
import {Container} from "react-bootstrap"

const CreateProfile = ({ createProfile, history }) => {
  const [formData, setFormData] = useState({
    department: "",
    institution: ""
  });

  const { department, institution } = formData;

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
    <Container>
      <h2 className="large"> Create Instructor Profile </h2>
      <p className="lead">
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
            placeholder="enter your department"
            name="department"
            value={department}
            onChange={e => onChange(e)}
          />
        </div>
        <div className="form-group">
          <label for="department">Institution</label>
          <input
            type="institution"
            className="form-control"
            id="institution"
            aria-describedby="emailHelp"
            placeholder="where do you teach?"
            name="institution"
            value={institution}
            onChange={e => onChange(e)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Create Profile
        </button>
      </form>
    </Container>
  );
};

CreateProfile.propTypes = {
  createProfile: PropTypes.func.isRequired
};

export default connect(null, { createProfile })(withRouter(CreateProfile));
