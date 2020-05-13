import React, { Fragment,Component } from "react";
import PDFUpload from "../PDFUpload";
import { PDF } from "./PDFviewer";
import htmlpdf from "html2pdf.js";
import { connect } from "react-redux";
import ChatPage from "./ChatPage"
import {Row , Col ,Jumbotron, Container, Button} from "react-bootstrap";
import { getLecture } from "../../../actions/lecture";
import io from "socket.io-client";

class Lecture extends Component {
  
  constructor(props) {
    
    super(props);
    {(console.log(this.props))}
    this.state = {
      id : this.props.match.params.id,
      value2: "",
      pdf_link: "https://dev-handraze.s3.amazonaws.com/profilepictures/undefined/1589268500215-Status%20report.pdf",
      page: 1,
      page_in_viewer: 1,
      message: ""
    }
  }

  componentWillMount() {
    const { getLecture } = this.props
     getLecture(this.state.id)
     console.log(this.props)
  }
  componentDidMount() {
    let server = "http://localhost:3000";
    this.socket = io(server);
    this.socket.on('connection', function() {
      this.socket.emit('room', this.state.id);
   });
    this.socket.emit('room',this.state.id);
    
    this.socket.on("Get PDF", messageFromBackEnd => {
        if(messageFromBackEnd){
          this.setState({
            pdf_link: messageFromBackEnd.pdf
          })
        }
    })

    this.socket.on("Get Page", messageFromBackEnd => {
      if(messageFromBackEnd){
        this.setState({
          page: messageFromBackEnd.page
        })
      }
  })

  }
  handlePDFChange =(e) => {
    this.setState({
      pdf_link: e.target.value
    })
}
  setPage = (e) => {
    e.preventDefault();
    let page = this.state.page;
    let lecture  = this.state.id
    this.setState({ page: page})
    this.socket.emit("Set Page", {
      page, lecture
    }); 
}
handlePageChange =(e) => {
  this.setState({
    page: e.target.value
  })
}

callbackFunction = (childData) => { 
  this.setState({pdf_link: childData})
  this.setState({page: 1})
  let pdf = this.state.pdf_link;
  let page = 1;
  let lecture  = this.state.id;
  this.socket.emit("Set Page", {
    page, lecture
  }); 
  this.socket.emit("Set PDF", {
      pdf, lecture
    });   
}

  render() {
    const { lecture } = this.props.lecture
    return (
      <Fragment>
        <Jumbotron fluid className="Logo">
        <div className="jumbotron_text">
        <Row> <h2>{this.props.lecture.lecture && this.props.lecture.lecture.topic? this.props.lecture.lecture.topic: "loading"} </h2> </Row>
        <Row>
          <Col xs={3} style={{"text-align": "right"}}><h6>Upload PDF</h6></Col>
          <Col><PDFUpload parentCallback = {this.callbackFunction}/></Col>
        </Row>
    <Row></Row>      
    <br/>
    <Row>
    <Col xs={3} style={{"text-align": "right"}}><h6>Slide Number</h6></Col>
    <Col xs={3}>
      <input
      class="form-control form-control-lg"
      placeholder="Set Presentation Slide"
      id="page"
      prefix={"test"}
      type="text"
      value={this.state.page}
      onChange={this.handlePageChange} />
    </Col>
    <Col xs={3}>
      <Button variant="primary"  type="button"
                      id="button-addon1"
                      type="primary" style={{ width: '100%' }} 
                      onClick={this.setPage} 
                      htmlType="submit">Set
      </Button>
    </Col>    
    </Row>
    </div>
      </Jumbotron>
          <Row>
          <Col>
          <PDF page={this.state.page} link={this.state.pdf_link}/>
          </Col>
          <Col xs={4}>
          <ChatPage inputValue={this.state.id}/>
          </Col>
        </Row>  
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    lecture: state.lecture,
    lectureLoading: state.lecture.loading
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    getLecture: (id) => dispatch(getLecture(id))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Lecture);