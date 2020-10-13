import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export class InstructorCourseCard extends Component {
  constructor(props) {
    console.log(props);
    if (props.inputValue.dayOfWeek != null) {
    }

    super(props);
    this.state = {
      inputValue: [],
      dayOfWeekShortened: "",
    };
  }

  formatDayOfWeek(dayOfWeek) {
    var dayOfWeekShortened = "";
    for (var key in dayOfWeek) {
      console.log(dayOfWeek[key]);
      switch (dayOfWeek[key]) {
        case "Monday":
          dayOfWeekShortened = dayOfWeekShortened + "M";
          break;
        case "Tuesday":
          dayOfWeekShortened = dayOfWeekShortened + " T";
          break;
        case "Wednesday":
          dayOfWeekShortened = dayOfWeekShortened + " W";
          break;
        case "Thursday":
          dayOfWeekShortened = dayOfWeekShortened + " Th";
          break;
        case "Friday":
          dayOfWeekShortened = dayOfWeekShortened + " F";
          break;
        case "Saturday":
          dayOfWeekShortened = dayOfWeekShortened + " St";
          break;
        case "Sunday":
          dayOfWeekShortened = dayOfWeekShortened + " Sn";
          break;
      }
    }

    return dayOfWeekShortened;
  }
  render() {
    return (
      <div>
        <Card border="primary" style={{ width: "18rem" }}>
          <Card.Header>
            <b>{this.props.inputValue.title}</b>
          </Card.Header>
          <Card.Body>
            <Card.Subtitle className="mb-2 text-muted">
              {this.props.inputValue.description}
            </Card.Subtitle>
            <Card.Text>
              <b>{this.formatDayOfWeek(this.props.inputValue.dayOfWeek)}</b>{" "}
              {this.props.inputValue.classStart}-
              {this.props.inputValue.classEnd}
              <br />
              Enrollment Code: <b>{this.props.inputValue.code}</b>
            </Card.Text>
            <Link className="link" to={`/course/${this.props.inputValue._id}`}>
              <Button variant="primary">View</Button>
            </Link>
          </Card.Body>
        </Card>
        <br />
      </div>
    );
  }
}
