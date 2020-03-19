import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getStudentProfileById } from "../../actions/profile";
import { Container, Row, Col, Spinner } from "react-bootstrap";

const Profile = ({
  getStudentProfileById,
  profile: { profile, loading },
  auth: { user },
  match
}) => {
  useEffect(() => {
    getStudentProfileById(match.params.id);
  }, [getStudentProfileById]);
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
              <p className="lead">Year: {profile.user && profile.year}</p>
              <p className="lead">
                Goes to: {profile.user && profile.institution}
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

export default connect(mapStateToProps, { getStudentProfileById })(Profile);
