import React, { Fragment, useState } from "react";
import axios from "axios";
import { setAlert } from "../../actions/alert";
import { connect } from "react-redux";
import { createCourse } from "../../actions/course";
import PropTypes from "prop-types";
import { Redirect, withRouter } from "react-router-dom";

const CreateCourse = ({ createCourse, history }) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    dayOfWeek: "",
    classStart: "",
    location: "",
    sectionNumber: "",
    classDuration: ""
  });

  const {
    title,
    description,
    dayOfWeek,
    classStart,
    location,
    sectionNumber,
    classDuration
  } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    {
      createCourse(
        {
          title,
          description,
          dayOfWeek,
          classStart,
          location,
          sectionNumber,
          classDuration
        },
        history
      );
    }
  };

  return (
    <Fragment>
      <div className="container">
        <h2> Create Course </h2>
        <p> Enter course info</p>
        <form className="form" onSubmit={e => onSubmit(e)}>
          <div className="form-group">
            <label for="email">Title</label>
            <input
              type="text"
              className="form-control"
              id="title"
              aria-describedby="emailHelp"
              name="title"
              value={title}
              onChange={e => onChange(e)}
              placeholder="Enter first name"
              required
            />
          </div>
          <div className="form-group">
            <label for="email">Description</label>
            <input
              type="text"
              className="form-control"
              id="description"
              aria-describedby="emailHelp"
              name="description"
              value={description}
              onChange={e => onChange(e)}
              placeholder="Enter last name"
              required
            />
          </div>
          <div className="form-group">
            <label for="email">Day of Week</label>
            <input
              type="text"
              className="form-control"
              id="dayOfWeek"
              aria-describedby="emailHelp"
              name="dayOfWeek"
              value={dayOfWeek}
              onChange={e => onChange(e)}
              placeholder="Enter email"
              required
            />
          </div>
          <div className="form-group">
            <label for="password">Class Start</label>
            <input
              type="text"
              className="form-control"
              id="classStart"
              placeholder="Password"
              name="classStart"
              value={classStart}
              onChange={e => onChange(e)}
            />
          </div>
          <div className="form-group">
            <label for="password">Location</label>
            <input
              type="text"
              className="form-control"
              id="location"
              placeholder="Password"
              name="location"
              value={location}
              onChange={e => onChange(e)}
            />
          </div>
          <div className="form-group">
            <label for="password">Section Number</label>
            <input
              type="text"
              className="form-control"
              id="sectionNumber"
              placeholder="Password"
              name="sectionNumber"
              value={sectionNumber}
              onChange={e => onChange(e)}
            />
          </div>
          <div className="form-group">
            <label for="password">Class Duration</label>
            <input
              type="text"
              className="form-control"
              id="classDuration"
              placeholder="Password"
              name="classDuration"
              value={classDuration}
              onChange={e => onChange(e)}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </Fragment>
  );
};

CreateCourse.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { setAlert, createCourse })(
  withRouter(CreateCourse)
);
