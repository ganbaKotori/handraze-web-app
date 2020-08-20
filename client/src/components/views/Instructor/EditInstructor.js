import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createProfile } from "../../../actions/profile";
import { Link, withRouter } from "react-router-dom";
import { FileUpload } from "../FileUpload";

const EditInstructor = ({ createProfile, history}) => {

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
    <div class="container">
      <h2>Edit Profile Picture</h2>
      <FileUpload />
      <h2> Edit Instructor Profile </h2>
      <p>
        {" "}
        Enter updated information below to make a change to your account.
      </p>
      <form className="form" onSubmit={e => onSubmit(e)}>
        <div className="form-group">
          <label for="year">Department</label>
          <input
            type="department"
            className="form-control"
            id="department"
            aria-describedby="emailHelp"
            placeholder="Where do you attend school?"
            name="department"
            value={department}
            onChange={e => onChange(e)}
          />
          <label for="institution">Institution</label>
          <input
            type="institution"
            className="form-control"
            id="institution"
            aria-describedby="emailHelp"
            placeholder="Where do you attend school?"
            name="institution"
            value={institution}
            onChange={e => onChange(e)}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

EditInstructor.propTypes = {
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
  createProfile: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile
});


export default connect(null, { createProfile })(
  withRouter(EditInstructor)
);
