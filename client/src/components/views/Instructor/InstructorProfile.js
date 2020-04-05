import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getInstructorProfileById } from "../../../actions/profile";
import { Container, Row, Col, Spinner } from "react-bootstrap";

const Profile = ({
  getInstructorProfileById,
  profile: { profile, loading },
  auth: { user },
  match
}) => {
  useEffect(() => {
    getInstructorProfileById(match.params.id);
  }, [getInstructorProfileById]);
  return profile === null ? (
    <div>
      <br />
      <br />
      <br />
      <Spinner />
    </div>
  ) : (
    <Container>
      <br />
      <br />
      <br />
      <Row>
        <Col xs={7}>
          {" "}
          <Row>
            <Col xs={4}>
              <img src="https://via.placeholder.com/100" className="profpic" />
            </Col>
            <Col xs={6}>
              <p className="lead">Student</p>
              <p className="lead">
                {user && profile.user.firstName}{" "}
                {profile.user && profile.user.lastName}
              </p>
              <p className="lead">
                Department: {profile.user && profile.department}
              </p>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

Profile.propTypes = {
  getProfileById: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  auth: state.auth
});

export default connect(mapStateToProps, { getInstructorProfileById })(Profile);
