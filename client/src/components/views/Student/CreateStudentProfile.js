import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createProfile2 } from "../../../actions/profile";
import { Link, withRouter } from "react-router-dom";
import { Container } from "react-bootstrap";

const CreateStudentProfile = ({ createProfile2, history }) => {
  const [formData, setFormData] = useState({
    year: "",
    institution: "",
  });

  const { year, institution } = formData;

  // Select options for status
  const options = [
    { label: "* Select Professional Status", value: 0 },
    { label: "Developer", value: "Developer" },
    { label: "Junior Developer", value: "Junior Developer" },
    { label: "Senior Developer", value: "Senior Developer" },
    { label: "Manager", value: "Manager" },
    { label: "Student or Learning", value: "Student or Learning" },
    { label: "Instructor or Teacher", value: "Instructor or Teacher" },
    { label: "Intern", value: "Intern" },
    { label: "Other", value: "Other" },
  ];

  const onChange = (e) =>
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  const onSubmit = (e) => {
    e.preventDefault();
    createProfile2(formData, history);
  };
  return (
    <Container>
      <h2 className="large"> Create Student Profile </h2>
      <p className="lead">
        {" "}
        Enter your information below to create a Student Profile!
      </p>
      <form className="form" onSubmit={(e) => onSubmit(e)}>
        <div className="form-group">
          <label for="year">Year</label>
          <select
            type="year"
            className="form-control"
            id="year"
            aria-describedby="emailHelp"
            placeholder="Enter your Year"
            name="year"
            value={year}
            onChange={(e) => onChange(e)}
          >
            <option value="">--Please choose an option--</option>
            <option value="freshman">Freshman</option>
            <option value="sophmore">Sophmore</option>
            <option value="junior">Junior</option>
            <option value="senior">Senior</option>
          </select>

          <label for="institution">Institution</label>
          <input
            type="institution"
            className="form-control"
            id="institution"
            aria-describedby="emailHelp"
            placeholder="Where do you attend school?"
            name="institution"
            value={institution}
            onChange={(e) => onChange(e)}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Create Profile
        </button>
      </form>
    </Container>
  );
};

CreateStudentProfile.propTypes = {
  createProfile2: PropTypes.func.isRequired,
};

export default connect(null, { createProfile2 })(
  withRouter(CreateStudentProfile)
);
