import React, { Fragment, useState } from "react";
import axios from "axios";
import { setAlert } from "../../actions/alert";
import { connect } from "react-redux";
import { createCourse } from "../../actions/course";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";

const EnrollCourse = () => {
  /*const [formData, setFormData] = useState({
    code: ""
  });

  const { code } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    {
      createCourse({
        code
      });
    }
  };*/


/*
EnrollCourse.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { setAlert, createCourse })(
  EnrollCourse
);
*/
export default EnrollCourse;
