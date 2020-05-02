import React, { Fragment,Component } from "react";
import { PDF } from "./PDFviewer";
import htmlpdf from "html2pdf.js";
import { connect } from "react-redux";
import ChatPage from "./ChatPage"
import {Row , Col ,Jumbotron, Container} from "react-bootstrap";
import { getLecture } from "../../../actions/lecture";
import io from "socket.io-client";

class Lecture extends Component {
  constructor(props) {
    super(props);
    this.state = { showPopup: false };
    this.test = this.test.bind(this);
    this.state = {
      id : this.props.match.params.id,
      pdf_link: "https://www.planetebook.com/free-ebooks/the-great-gatsby.pdf"
  }

  }

  setPDF = (e) => {
    e.preventDefault();
    {(console.log(this.props))}
    //let chatMessage = this.state.chatMessage
    //let userId = this.props.user1.user._id;
    alert(this.state.pdf_link)
    var pdf = this.state.pdf_link;
    this.socket.emit("Set PDF", {
      pdf
    });
    this.setState({ pdf_link: "" })
}

  componentWillMount() {
    const { getLecture } = this.props
     getLecture(this.state.id)
     console.log(this.props)
  }

  componentDidMount() {
    alert(this.state.pdf_link)
    let server = "http://localhost:3000";
    this.socket = io(server);
    this.socket.on("Get PDF", messageFromBackEnd => {
        alert(messageFromBackEnd)
    })
  }

  handlePDFChange =(e) => {
    this.setState({
      pdf_link: e.target.value
    })
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
        <input
      
                    class="form-control form-control-lg"
                    placeholder="Enter a message."
                    id="message"
                    prefix={"test"}
                    type="text"
                    value={this.state.pdf_link}
                    onChange={this.handlePDFChange}
                  />
        <div class="input-group-prepend">
                    <button
                      class="btn btn-outline-secondary"
                      type="button"
                      id="button-addon1"
                      type="primary" style={{ width: '100%' }} 
                      onClick={this.setPDF} 
                      htmlType="submit"
                    >
                      Send {this.state.inputValue}
                    </button>
                  </div>
        </Container>
      </Jumbotron>
          <Row>
          <Col>
          <PDF link={this.state.pdf_link}/>
          </Col>
          <Col>
          <ChatPage inputValue={this.state.id}/>
          </Col>
        </Row>
          
       
          
          <div class="row">
            <div class="col-md-8 col-xs-12">
              <div class="embed-responsive embed-responsive-16by9 ">
                <object
                  id="pdf"
                  height="100%"
                  width="100%"
                  type="application/pdf"
                  data="data:application/pdf;base64, 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IFIgL1hZWiBudWxsIG51bGwgMF0KL0xhbmcoZW4tR0IpCj4+CmVuZG9iagoKMTMgMCBvYmoKPDwvQXV0aG9yPEZFRkYwMDQzMDA2MTAwNzIwMDZDMDA3NDAwNkYwMDZFMDAyMDAwNDQwMDY5MDA2MzAwNkIwMDczMDA2RjAwNkU+Ci9DcmVhdG9yPEZFRkYwMDU3MDA3MjAwNjkwMDc0MDA2NTAwNzI+Ci9Qcm9kdWNlcjxGRUZGMDA0RjAwNzAwMDY1MDA2RTAwNEYwMDY2MDA2NjAwNjkwMDYzMDA2NTAwMjAwMDM0MDAyRTAwMzAwMDJFMDAzMT4KL0NyZWF0aW9uRGF0ZShEOjIwMTUwNzIyMTUwOTE0KzAxJzAwJyk+PgplbmRvYmoKCnhyZWYKMCAxNAowMDAwMDAwMDAwIDY1NTM1IGYgCjAwMDAwMTIzMDYgMDAwMDAgbiAKMDAwMDAwMDAxOSAwMDAwMCBuIAowMDAwMDAwMjA0IDAwMDAwIG4gCjAwMDAwMTI0NDkgMDAwMDAgbiAKMDAwMDAwMDIyNCAwMDAwMCBuIAowMDAwMDExNDg2IDAwMDAwIG4gCjAwMDAwMTE1MDggMDAwMDAgbiAKMDAwMDAxMTcwNyAwMDAwMCBuIAowMDAwMDEyMDMwIDAwMDAwIG4gCjAwMDAwMTIyMTkgMDAwMDAgbiAKMDAwMDAxMjI1MSAwMDAwMCBuIAowMDAwMDEyNTQ4IDAwMDAwIG4gCjAwMDAwMTI2NDUgMDAwMDAgbiAKdHJhaWxlcgo8PC9TaXplIDE0L1Jvb3QgMTIgMCBSCi9JbmZvIDEzIDAgUgovSUQgWyA8REMwMkY2Q0UwRTQ5NUVGNjA2MkY3OTlDRjBCNjg0QTU+CjxEQzAyRjZDRTBFNDk1RUY2MDYyRjc5OUNGMEI2ODRBNT4gXQovRG9jQ2hlY2tzdW0gLzFENEIzRkZFNkYxNTkzMDM2OUFCRjZBNzFCMDZCQjNECj4+CnN0YXJ0eHJlZgoxMjg5OAolJUVPRgo="
                >
                  <span>PDF plugin is not available.</span>
                </object>
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

