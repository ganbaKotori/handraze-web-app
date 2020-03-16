import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createProfile2 } from "../../actions/profile";
import { Link, withRouter } from "react-router-dom";

const CreateStudentProfile = ({ createProfile2, history }) => {
  const [formData, setFormData] = useState({
    year: "",
    institution: ""
  });

  const { year, institution } = formData;

  const onChange = e =>
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

  const onSubmit = e => {
    e.preventDefault();
    createProfile2(formData, history);
  };
  return (
    <Fragment>
      <br />
      <br />
      <br />
      <br />
      <h2> Create Student Profile </h2>
      <p> Enter your information below to create a Student Profile!</p>

      <form className="form" onSubmit={e => onSubmit(e)}>
        <div className="form-group">
          <label for="year">Year</label>
          <input
            type="year"
            className="form-control"
            id="year"
            aria-describedby="emailHelp"
            placeholder="Enter your Year"
            name="year"
            value={year}
            onChange={e => onChange(e)}
          />
          <label for="institution">Institution</label>
          <input
            type="institution"
            className="form-control"
            id="institution"
            aria-describedby="emailHelp"
            placeholder="Enter your Department"
            name="institution"
            value={institution}
            onChange={e => onChange(e)}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
        <Link to="/student">Go to Student Profile</Link>
      </form>
    </Fragment>
  );
};

CreateStudentProfile.propTypes = {
  createProfile2: PropTypes.func.isRequired
};

export default connect(null, { createProfile2 })(
  withRouter(CreateStudentProfile)
);
