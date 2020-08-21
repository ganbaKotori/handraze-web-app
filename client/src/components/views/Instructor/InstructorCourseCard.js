import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export class InstructorCourseCard extends Component {
  constructor(props) {
    if(props.inputValue.dayOfWeek != null){
      if(String(props.inputValue.dayOfWeek).charAt(0) == "T"){
        props.inputValue.dayOfWeek = String(props.inputValue.dayOfWeek).substring(0,2);

      }else{
        props.inputValue.dayOfWeek = String(props.inputValue.dayOfWeek).charAt(0);
      }
      
    };
    super(props);
    this.state = {
      inputValue: []
    };
  }
  render() {
    return (
      <div>
<Card border="primary" style={{ width: '18rem' }}>
<Card.Header><b>{this.props.inputValue.title}</b></Card.Header>
<Card.Body>
<Card.Subtitle className="mb-2 text-muted">{this.props.inputValue.description}</Card.Subtitle>
  <Card.Text>{this.props.inputValue.dayOfWeek} {this.props.inputValue.classStart}-{this.props.inputValue.classEnd}<br/>Enrollment Code: <b>{this.props.inputValue.code}</b></Card.Text>  
  <Link className="link" to={`/course/${this.props.inputValue._id}`}>
    <Button variant="primary">View</Button>
    </Link>
</Card.Body>
</Card>
<br/>
</div>
    );
  }
}
