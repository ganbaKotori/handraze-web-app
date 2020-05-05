import React, { Fragment,Component } from "react";
import { PDF } from "./PDFviewer";
import htmlpdf from "html2pdf.js";
import { connect } from "react-redux";
import ChatPage from "./ChatPage"
import {Row , Col ,Jumbotron, Container} from "react-bootstrap";
import { getLecture } from "../../../actions/lecture";

class Lecture extends Component {
  constructor(props) {
    super(props);
    this.state = { showPopup: false };
    this.test = this.test.bind(this);
    this.state = {
      id : this.props.match.params.id
  }

  }

  componentWillMount() {
    const { getLecture } = this.props
     getLecture(this.state.id)
     console.log(this.props)
  }

  test() {
    // Get the element.
    var element = document.getElementById("test");

    // Generate the PDF.
    htmlpdf()
      .from(element)
      .set({
        margin: 1,
        filename: "test.pdf",
        html2canvas: { scale: 2 },
        jsPDF: {
          orientation: "portrait",
          unit: "in",
          format: "letter",
          compressPDF: true
        }
      })
      .save();
  }



  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup
    });
  }
  render() {
    const { lecture } = this.props.lecture
    //console.log(this.props.lecture.lecture.topic)
    return (
      <Fragment>
          <Jumbotron fluid className="Logo">
        <Container className="jumbotron_text">
          <h5>Topic</h5>
    <h3>{this.props.lecture.lecture && this.props.lecture.lecture.topic? this.props.lecture.lecture.topic: "loading"} </h3>
        <button onClick={this.test}>Generate PDF</button>
        </Container>
      </Jumbotron>
          <Row>
          <Col>
          <PDF />
          </Col>
          <Col>
          <ChatPage inputValue={this.state.id}/>
          </Col>
        </Row>
          
       
          
          <div class="row">
            <div class="col-md-8 col-xs-12">
              <div class="embed-responsive embed-responsive-16by9 ">
               
              </div>
            </div>
          </div>
        
        
        
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

