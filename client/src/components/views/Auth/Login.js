import React, { Fragment, useState } from "react";
import axios from "axios";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { login } from "../../../actions/auth";
import { Link, Redirect } from "react-router-dom";
import { Container, Col, Row, Button, Card} from "react-bootstrap";

const Login = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const { email, password } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    login(email, password);
    console.log("Success");
  };

  //Redirect if logged in
  if (isAuthenticated) {
    return <Redirect to="/student" />;
  }
  return (
    <Fragment>
      <Container>
      <Row className="justify-content-md-center">
<h2></h2>
      </Row>
      <Row className="justify-content-md-center">
      <Col xs lg="4">
      <Card>

<Card.Header as="h5" style={{"textAlign": "center"}}>Log in to handraze</Card.Header>
<Card.Body>
<form className="form" onSubmit={e => onSubmit(e)}>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  aria-describedby="emailHelp"
                  name="email"
                  value={email}
                  onChange={e => onChange(e)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
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
              Log in
              </Button>
            </form>
</Card.Body>
</Card>
      
     

      </Col>
      
  </Row>
           
            

      </Container>
    </Fragment>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { login })(Login);
