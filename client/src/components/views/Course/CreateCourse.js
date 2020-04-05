import React, { Fragment, useState } from "react";
import axios from "axios";
import { setAlert } from "../../../actions/alert";
import { connect } from "react-redux";
import { createCourse } from "../../../actions/course";
import PropTypes from "prop-types";
import { Redirect, withRouter } from "react-router-dom";

const CreateCourse = ({ createCourse, history }) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    classStart: "",
    classEnd: "",
    location: "",
    sectionNumber: ""
  });

  const [formData2, setFormData2] = useState({
    dayOfWeek: []
  });

  const {
    title,
    description,
    classStart,
    classEnd,
    location,
    sectionNumber
  } = formData;

  const { dayOfWeek } = formData2;

  const onClick = e => {
    let index;

    // check if the check box is checked or unchecked
    if (e.target.checked) {
      // add the numerical value of the checkbox to options array
      dayOfWeek.push(e.target.value);
    } else {
      // or remove the value from the unchecked checkbox from the array
      index = dayOfWeek.indexOf(+e.target.value);
      dayOfWeek.splice(index, 1);
    }
    setFormData2({ ...formData2, [e.target.checked]: e.target.value });
  };

  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async e => {
    e.preventDefault();
    {
      console.log(dayOfWeek);
      console.log(formData);
      console.log(classEnd);
      createCourse(
        {
          classEnd,
          title,
          description,
          dayOfWeek,
          classStart,
          location,
          sectionNumber
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
              placeholder="name of course"
              required
            />
          </div>
          <div className="form-group">
            <label for="email">Description</label>​
            <textarea
              type="textarea"
              className="form-control"
              id="description"
              aria-describedby="emailHelp"
              name="description"
              value={description}
              onChange={e => onChange(e)}
              placeholder="brief description of course"
              required
              rows="3"
            ></textarea>
          </div>
          <div className="form-group">
            <label for="email">Day of Week</label>
            <br />
            <br />
            <table>
              <tr>
                <td className="dayOfWeek">
                  {" "}
                  <div className="input-group ">
                    <input
                      type="checkbox"
                      value={"Monday"}
                      onClick={e => onClick(e)}
                    />
                    <label>Monday</label>
                  </div>
                </td>
                <td className="dayOfWeek">
                  {" "}
                  <div className="input-group">
                    <input
                      type="checkbox"
                      value={"Tuesday"}
                      onClick={e => onClick(e)}
                    />
                    <label>Tuesday</label>
                  </div>
                </td>
                <td className="dayOfWeek">
                  {" "}
                  <div className="input-group">
                    <input
                      type="checkbox"
                      value={"Wednesday"}
                      onClick={e => onClick(e)}
                    />
                    <label>Wednesday</label>
                  </div>
                </td>
                <td className="dayOfWeek">
                  {" "}
                  <div className="input-group">
                    <input
                      type="checkbox"
                      value={"Thursday"}
                      onClick={e => onClick(e)}
                    />
                    <label>Thursday</label>
                  </div>
                </td>
                <td className="dayOfWeek">
                  {" "}
                  <div className="input-group">
                    <input
                      type="checkbox"
                      value={"Friday"}
                      onClick={e => onClick(e)}
                    />
                    <label>Friday</label>
                  </div>
                </td>
                <td className="dayOfWeek">
                  {"  "}
                  <div className="input-group">
                    <input
                      type="checkbox"
                      value={"Saturday"}
                      onClick={e => onClick(e)}
                    />
                    <label> Saturday </label>
                  </div>
                </td>
                <td className="dayOfWeek">
                  {" "}
                  <div className="input-group">
                    <input
                      type="checkbox"
                      value={"Sunday"}
                      onClick={e => onClick(e)}
                    />
                    <label>Sunday</label>
                  </div>
                </td>
              </tr>
            </table>
            <br />
          </div>
          <div className="form-group">
            <label for="password">What time does the class start?</label>
            <input
              type="text"
              className="form-control"
              id="classStart"
              placeholder="example: 8:30 AM"
              name="classStart"
              value={classStart}
              onChange={e => onChange(e)}
            />
          </div>
          <div className="form-group">
            <label for="password">What time does the class end?</label>
            <input
              type="text"
              className="form-control"
              id="classEnd"
              placeholder="example: 8:30 AM"
              name="classEnd"
              value={classEnd}
              onChange={e => onChange(e)}
            />
          </div>
          <div className="form-group">
            <label for="password">Location</label>
            <input
              type="text"
              className="form-control"
              id="location"
              placeholder="building, room number, etc."
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
              placeholder="optional"
              name="sectionNumber"
              value={sectionNumber}
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
