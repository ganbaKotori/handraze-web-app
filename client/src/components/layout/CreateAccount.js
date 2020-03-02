import React, { Fragment, useState } from "react";
import axios from "axios";
import { setAlert } from "../../actions/alert";
import { connect } from "react-redux";
import { register } from "../../actions/auth";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";

const CreateAccount = ({ setAlert, register, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    userName: ""
  });

  const { firstName, lastName, email, password, userName } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    if (password == "") {
      setAlert("There is no password submitted!", "danger");
    } else {
      register({ email, userName, password, lastName, firstName });
    }
  };

  if (isAuthenticated) {
    return <Redirect to="/student" />;
  }

  return (
    <Fragment>
      <div className="container">
        <h2> Create Account </h2>
        <p>
          {" "}
          Enter your information below to make an account and get started with
          Handraze.
        </p>
        <form className="form" onSubmit={e => onSubmit(e)}>
          <div className="form-group">
            <label for="email">First Name</label>
            <input
              type="text"
              className="form-control"
              id="firstName"
              aria-describedby="emailHelp"
              name="firstName"
              value={firstName}
              onChange={e => onChange(e)}
              placeholder="Enter first name"
              required
            />
          </div>
          <div className="form-group">
            <label for="email">Last Name</label>
            <input
              type="text"
              className="form-control"
              id="lastName"
              aria-describedby="emailHelp"
              name="lastName"
              value={lastName}
              onChange={e => onChange(e)}
              placeholder="Enter last name"
              required
            />
          </div>
          <div className="form-group">
            <label for="email">Email address</label>
            <input
              type="email"
              className="form-control"
              id="email"
              aria-describedby="emailHelp"
              name="email"
              value={email}
              onChange={e => onChange(e)}
              placeholder="Enter email"
              required
            />
          </div>
          <div className="form-group">
            <label for="password">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={e => onChange(e)}
            />
          </div>
          <div className="form-check">
            <input type="checkbox" className="form-check-input" id="tosCheck" />
            <label className="form-check-label" for="tosCheck">
              Agree to T.O.S / Privacy Policy
            </label>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </Fragment>
  );
};

CreateAccount.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { setAlert, register })(CreateAccount);
