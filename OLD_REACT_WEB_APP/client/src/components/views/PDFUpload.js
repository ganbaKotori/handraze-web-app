import axios from "axios";
import React, { Component } from "react";
import { Row, Col, Container, Button, Card } from "react-bootstrap";

export class FileUpload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: null,
      user: ""
    };
    
  }

  submitFile = event => {
    event.preventDefault();
    const formData = new FormData();
    formData.text = this.state.user;

    formData.append("file", this.state.file[0]);
    console.log(formData);
    axios
      .post(`/api/upload/file-upload-pdf`, formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      })
      .then(response => {
        // handle your response;
        //window.location.reload(false);
        //alert(response.data)
        this.sendData(response.data)
      })
      .catch(error => {
        // handle your error
      });
  };

  handleFileUpload = event => {
    this.setState({ file: event.target.files });
  };

  sendData = (e) => {
    this.props.parentCallback(e);
}

  render() {
    return (

        <form onSubmit={this.submitFile} >
        <Col>
        <input
            label="Change Profile Picture"
            type="file"
            onChange={this.handleFileUpload}
          />      
        </Col>
        <br/>
        <Col>
        <button type="submit" className="btn btn-primary">Submit</button>
        </Col>     
        </form>
    );
  }
}

export default FileUpload;
