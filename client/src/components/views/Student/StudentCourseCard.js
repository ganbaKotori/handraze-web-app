import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export class CourseCard extends Component {
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
            <Link className="link" to={`/course/${this.props.inputValue._id}`}>
                  <div class="card">
                          <div class="card-header bg-primary">
                            <h6>{this.props.inputValue.title}</h6>
                            <h6>{this.props.inputValue.description}</h6>
                            <h6>{this.props.inputValue.dayOfWeek} {this.props.inputValue.classStart}-{this.props.inputValue.classEnd}</h6>
                          </div>
                          <div class="card-body">
                            <p class="card-text text-muted">
                              No New Questions | No New Answer | No New Notes
                            </p>
                          </div>
                          <div class="card-footer text-muted"></div>
                  </div>
              </Link>
                <br/>
        </div>
      
    );
  }
}
