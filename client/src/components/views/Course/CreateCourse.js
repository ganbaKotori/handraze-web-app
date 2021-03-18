import React, { Fragment, useState } from "react";
import { setAlert } from "../../../actions/alert";
import { connect } from "react-redux";
import { createCourse } from "../../../actions/course";
import PropTypes from "prop-types";
import { Redirect, withRouter } from "react-router-dom";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const CreateCourse = ({ createCourse, history }) => {
  function convertToConventionalTime(value) {
    var time = value; // your input

    time = time.split(":"); // convert to array

    // fetch
    var hours = Number(time[0]);
    var minutes = Number(time[1]);

    // calculate
    var timeValue;

    if (hours > 0 && hours <= 12) {
      timeValue = "" + hours;
    } else if (hours > 12) {
      timeValue = "" + (hours - 12);
    } else if (hours == 0) {
      timeValue = "12";
    }

    timeValue += minutes < 10 ? ":0" + minutes : ":" + minutes; // get minutes
    timeValue += hours >= 12 ? " P.M." : " A.M."; // get AM/PM
    return timeValue;
  }

  function secondsToHHMM(value) {
    var hours = Math.floor(value / 3600);
    value = value % 3600;
    var mins = value / 60;

    if (mins < 10) {
      mins = "0" + mins;
    }
    if (hours < 10) {
      hours = "0" + hours;
    }

    var time = hours + ":" + mins;
    var time2 = convertToConventionalTime(time);
    alert("time: " + time2);
    return time2;
  }
  //Time picker code
  const handleTimeChangeStart = (value) => {
    formData.classStart = secondsToHHMM(value);
  };
  const handleTimeChangeEnd = (value) => {
    formData.classEnd = secondsToHHMM(value);
  };

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    location: "",
    sectionNumber: "",
    startHour: "",
    startMinute: "",
    startAMPM: "",
    endHour: "",
    endMinute: "",
    endAMPM: "",
  });

  const [formData2, setFormData2] = useState({
    dayOfWeek: [],
  });

  const {
    title,
    description,
    location,
    sectionNumber,
    startHour,
    startMinute,
    startAMPM,
    endHour,
    endMinute,
    endAMPM,
  } = formData;

  const { dayOfWeek } = formData2;

  const onClick = (e) => {
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

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    {
      var classStart = startHour + ":" + startMinute + startAMPM;
      var classEnd = endHour + ":" + endMinute + endAMPM;
      createCourse(
        {
          classEnd,
          title,
          description,
          dayOfWeek,
          classStart,
          location,
          sectionNumber,
        },
        history
      );
    }
  };

  return (
    <Fragment>
      <Container fluid="md">
        <Row>
          <Col xs={12} md={12}>
            <h2
              className="large"
              style={{ "text-align": "center", "margin-top": "1rem" }}
            >
              Create A New Course
            </h2>
            <h4
              className="medium"
              style={{ "text-align": "center", "margin-top": "1rem" }}
            >
              Enter course info
            </h4>
          </Col>
        </Row>
        <Form onSubmit={(e) => onSubmit(e)}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="course title"
              value={title}
              id="title"
              aria-describedby="emailHelp"
              name="title"
              onChange={(e) => onChange(e)}
            />
            <Form.Text className="text-muted">Max 50 characters</Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Course Description</Form.Label>
            <Form.Control
              type="text"
              placeholder="a brief overview"
              id="description"
              name="description"
              value={description}
              onChange={(e) => onChange(e)}
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Location</Form.Label>
            <Form.Control
              type="text"
              id="location"
              placeholder="building, room number, etc."
              name="location"
              value={location}
              onChange={(e) => onChange(e)}
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Section Number</Form.Label>
            <Form.Control
              type="text"
              id="sectionNumber"
              placeholder="optional"
              name="sectionNumber"
              value={sectionNumber}
              onChange={(e) => onChange(e)}
            />
          </Form.Group>
          <Form.Label>Lecture Start</Form.Label>
          <Form.Row>
            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>Hour</Form.Label>
              <Form.Control
                as="select"
                defaultValue="Choose..."
                onChange={(e) => onChange(e)}
                value={formData.startHour}
                type="startHour"
                className="form-control"
                id="startHour"
                aria-describedby="emailHelp"
                name="startHour"
              >
                <option>Choose...</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
              </Form.Control>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>Minute</Form.Label>
              <Form.Control
                as="select"
                defaultValue="Choose..."
                name="startMinute"
                ype="startMinute"
                id="startMinute"
                onChange={(e) => onChange(e)}
                value={formData.startMinute}
              >
                <option>Choose...</option>
                <option value="00">00</option>
                <option value="05">05</option>
                <option value="10">10</option>
                <option value="15">15</option>
                <option value="20">20</option>
                <option value="25">25</option>
                <option value="30">30</option>
                <option value="35">35</option>
                <option value="40">40</option>
                <option value="45">45</option>
                <option value="50">50</option>
                <option value="55">55</option>
              </Form.Control>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>AM/PM</Form.Label>
              <Form.Control
                as="select"
                defaultValue="Choose..."
                onChange={(e) => onChange(e)}
                name="startAMPM"
                value={formData.startAMPM}
              >
                <option>Choose...</option>
                <option value="AM">AM</option>
                <option value="PM">PM</option>
              </Form.Control>
            </Form.Group>
          </Form.Row>
          <Form.Label>Lecture End</Form.Label>
          <Form.Row>
            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>Hour</Form.Label>
              <Form.Control
                as="select"
                defaultValue="Choose..."
                onChange={(e) => onChange(e)}
                name="endHour"
                value={formData.endHour}
              >
                <option>Choose...</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
              </Form.Control>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>Minute</Form.Label>
              <Form.Control
                as="select"
                defaultValue="Choose..."
                onChange={(e) => onChange(e)}
                name="endMinute"
                value={formData.endMinute}
              >
                <option>Choose...</option>
                <option value="00">00</option>
                <option value="05">05</option>
                <option value="10">10</option>
                <option value="15">15</option>
                <option value="20">20</option>
                <option value="25">25</option>
                <option value="30">30</option>
                <option value="35">35</option>
                <option value="40">40</option>
                <option value="45">45</option>
                <option value="50">50</option>
                <option value="55">55</option>
              </Form.Control>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>AM/PM</Form.Label>
              <Form.Control
                as="select"
                defaultValue="Choose..."
                onChange={(e) => onChange(e)}
                name="endAMPM"
                value={formData.endAMPM}
              >
                <option>Choose...</option>
                <option value="AM">AM</option>
                <option value="PM">PM</option>
              </Form.Control>
            </Form.Group>
          </Form.Row>

          <Form.Group as={Row} controlId="formHorizontalCheck">
            <Col sm={{ span: 10 }} xs={12} md={1}>
              <Form.Check
                label="Mon"
                type="checkbox"
                value={"Monday"}
                onClick={(e) => onClick(e)}
              />
            </Col>
            <Col sm={{ span: 10 }} xs={12} md={1}>
              <Form.Check
                label="Tues"
                type="checkbox"
                value={"Tuesday"}
                onClick={(e) => onClick(e)}
              />
            </Col>
            <Col sm={{ span: 10 }} xs={12} md={1}>
              <Form.Check
                label="Wed"
                type="checkbox"
                value={"Wednesday"}
                onClick={(e) => onClick(e)}
              />
            </Col>
            <Col sm={{ span: 10 }} xs={12} md={1}>
              <Form.Check
                label="Thurs"
                type="checkbox"
                value={"Thursday"}
                onClick={(e) => onClick(e)}
              />
            </Col>
            <Col sm={{ span: 10 }} xs={12} md={1}>
              <Form.Check
                label="Fri"
                type="checkbox"
                value={"Friday"}
                onClick={(e) => onClick(e)}
              />
            </Col>
            <Col sm={{ span: 10 }} xs={12} md={1}>
              <Form.Check
                label="Sat"
                type="checkbox"
                value={"Saturday"}
                onClick={(e) => onClick(e)}
              />
            </Col>
            <Col sm={{ span: 10 }} xs={12} md={1}>
              <Form.Check
                label="Sun"
                type="checkbox"
                value={"Sunday"}
                onClick={(e) => onClick(e)}
              />
            </Col>
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
        <Row>
        </Row>
      </Container>
    </Fragment>
  );
};

CreateCourse.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { setAlert, createCourse })(
  withRouter(CreateCourse)
);
