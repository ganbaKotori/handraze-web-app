import React, { Fragment, useState } from "react";
import axios from "axios";
import { setAlert } from "../../../actions/alert";
import { connect } from "react-redux";
import { register } from "../../../actions/auth";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";
import { Container, Col, Row, Button, Card} from "react-bootstrap";

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
    <Container>
    <Row className="justify-content-md-center">
    <h2>  </h2>
    </Row>
    <Row className="justify-content-md-center">
    <Col xs lg="4">
    <Card>

    <Card.Header as="h5" style={{"textAlign": "center"}}>Create your account</Card.Header>
  <Card.Body><form className="form" onSubmit={e => onSubmit(e)}>
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
              required
            />
          </div>
          <div className="form-group">
            <label for="email">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              aria-describedby="emailHelp"
              name="email"
              value={email}
              onChange={e => onChange(e)}
              required
            />
          </div>
          <div className="form-group">
            <label for="password">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              value={password}
              onChange={e => onChange(e)}
            />
          </div>
          <Button  type="submit" variant="primary" size="lg" block>
          Sign Up
              </Button>
        </form></Card.Body>
</Card>
    
   

    </Col>
    
</Row>
         
          

    </Container>
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
