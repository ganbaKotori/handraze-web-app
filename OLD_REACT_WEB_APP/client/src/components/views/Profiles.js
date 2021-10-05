import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getProfiles } from "../../actions/profile";
import InstructorProfileItem from "./Instructor/InstructorProfileItem";
import StudentProfileItem from "./Student/StudentProfileItem";
import { Spinner } from "react-bootstrap";

const Profiles = ({ getProfiles, profile: { profiles, loading } }) => {
  useEffect(() => {
    getProfiles();
  }, []);

  var newArray = [];
  for (var x in profiles[0]) {
    //console.log(res.data[x]);
    newArray.push(profiles[0][x]);
  }
  var newArray2 = [];
  for (var x in profiles[1]) {
    //console.log(res.data[x]);
    newArray2.push(profiles[1][x]);
  }
  {
    document.title = "Profiles";
  }
  console.log(newArray);
  return (
    <Fragment>
      {loading ? (
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      ) : (
        <Fragment>
          {" "}
          <h1 className="large text-primary">Profiles</h1>
          <br />
          <h1 className="lead">Instructor Profiles</h1>
          {newArray.map(profile => (
            <InstructorProfileItem inputValue={profile} />
          ))}
          <h1 className="lead">Student Profiles</h1>
          {newArray2.map(profile => (
            <StudentProfileItem inputValue={profile} />
          ))}
        </Fragment>
      )}
    </Fragment>
  );
};

Profiles.propTypes = {
  getProfiles: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile
});

export default connect(mapStateToProps, { getProfiles })(Profiles);
