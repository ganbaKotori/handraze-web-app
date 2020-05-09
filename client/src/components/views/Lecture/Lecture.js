import React, { Fragment,Component } from "react";
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
      pdf_link: "https://www.planetebook.com/free-ebooks/the-great-gatsby.pdf",
      page: 1,
      page_in_viewer: 1
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
      // Connected, let's sign-up for to receive messages for this room
      this.socket.emit('room', "5e9caeb3b3672a44d4f5c44d");
   });
    this.socket.emit('room',"5e9caeb3b3672a44d4f5c44d");
    this.socket.emit("User Join", {
      server
    });
    
    this.socket.on("Get PDF", messageFromBackEnd => {
        //alert(messageFromBackEnd.page2)
        this.setState({
          pdf_link: messageFromBackEnd.pdf,
          page: messageFromBackEnd.page
        })
    })

    this.socket.on("User Update", messageFromBackEnd => {
      console.log(messageFromBackEnd)
      this.setState({
        page: parseInt(messageFromBackEnd[messageFromBackEnd.length - 1], 10)
      })
      //alert("USER JOINED")
  })
  }
  handlePDFChange =(e) => {
    this.setState({
      pdf_link: e.target.value
    })
}
  setPDF = (e) => {
    e.preventDefault();

    let pdf = this.state.pdf_link;
    alert( this.state.pdf_link)
    alert(pdf)
    let page = this.state.page;

    this.setState({ page: page})

    this.socket.emit("Set PDF", {
      pdf, page
    }); 
}
handlePageChange =(e) => {
  this.setState({
    page: e.target.value
  })
}

  render() {
    const { lecture } = this.props.lecture
    return (
      <Fragment>
          <Jumbotron fluid className="Logo">
        <Container className="jumbotron_text">
          
    <Row><h4>PDF Link</h4></Row>
    <Row>
    <Col>
     <input
      class="form-control form-control-lg"
      placeholder="Enter a link to a PDF file"
      id="pdf"
      prefix={"test"}
      type="text"
      value={this.state.pdf_link}
      onChange={this.handlePDFChange}
    />
    </Col>
    </Row>
    <br/>
    <Row><h4>Slide Number</h4></Row>
    <Row>
      <Col>
      <input
      class="form-control form-control-lg"
      placeholder="Set Presentation Slide"
      id="page"
      prefix={"test"}
      type="text"
      value={this.state.page}
      onChange={this.handlePageChange} />
    </Col>
    <Col xs={4}>
      <Button variant="primary"  type="button"
                      id="button-addon1"
                      type="primary" style={{ width: '100%' }} 
                      onClick={this.setPDF} 
                      htmlType="submit">Set
      </Button>
    </Col>
    </Row>
        </Container>
      </Jumbotron>
          <Row>
          <Col>
    <h3>Topic: {this.props.lecture.lecture && this.props.lecture.lecture.topic? this.props.lecture.lecture.topic: "loading"} </h3>
    <br/>
          <PDF page={this.state.page} link={this.state.pdf_link}/>
          </Col>
          <Col>
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