import React, { Fragment, Component } from "react";
import PDFUpload from "../PDFUpload";
import { PDF } from "./PDFviewer";
import htmlpdf from "html2pdf.js";
import { connect } from "react-redux";
import ChatPage from "./ChatPage";
import { Row, Col, Jumbotron, Container, Button, Card } from "react-bootstrap";
import { getLecture } from "../../../actions/lecture";
import io from "socket.io-client";
import { degrees, PDFDocument, rgb, StandardFonts } from 'pdf-lib';



class Lecture extends Component {
  constructor(props) {
    super(props);
    {
      console.log(this.props);
    }
    this.state = {
      id: this.props.match.params.id,
      value2: "",
      //pdf_link: "https://dev-handraze.s3.amazonaws.com/profilepictures/undefined/1589268500215-Status%20report.pdf",
      pdf_link: null,
      page: 1,
      page_in_viewer: 1,
      message: "",
      numOfPages: null
    };
  }

  componentWillMount() {
    const { getLecture } = this.props;
    getLecture(this.state.id);
    console.log(this.props);
  }
  componentDidMount() {
    this.socket = io();
    this.socket.on("connection", function () {
      this.socket.emit("room", this.state.id);
    });
    this.socket.emit("room", this.state.id);

    this.socket.on("Get PDF", (messageFromBackEnd) => {
      if (messageFromBackEnd) {
        this.setState({
          pdf_link: messageFromBackEnd.pdf,
        });
        this.getNumOfPages(this.state.pdf_link)
      }
    });

    this.socket.on("Get Page", (messageFromBackEnd) => {
      if (messageFromBackEnd) {
        this.setState({
          page: messageFromBackEnd.page,
        });
      }
    });
  }
  handlePDFChange = (e) => {
    this.setState({
      pdf_link: e.target.value,
    });
  };
  setPage = (e) => {
    e.preventDefault();
    let page = this.state.page;
    let lecture = this.state.id;
    this.setState({ page: page });
    this.socket.emit("Set Page", {
      page,
      lecture,
    });
  };
  handlePageChange = (e) => {
    if(e.target.value <= this.state.numOfPages){
      this.setState({
        page: e.target.value,
      });
    }
    
  };

  async getNumOfPages (pdfLink) {
    const existingPdfBytes = await fetch(pdfLink).then(res => res.arrayBuffer())
    const pdfDoc = await PDFDocument.load(existingPdfBytes)
 
    const pages = pdfDoc.getPages()
    console.log(pages.length)
    this.setState({numOfPages: pages.length})
  }

  callbackFunction = (childData) => {
    this.setState({ pdf_link: childData });
    this.setState({ page: 1 });
    let pdf = this.state.pdf_link;
    let page = 1;
    let lecture = this.state.id;
    this.socket.emit("Set Page", {
      page,
      lecture,
    });
    this.socket.emit("Set PDF", {
      pdf,
      lecture,
    });
  };

  render() {
    const { lecture } = this.props.lecture;
    return (
      <Fragment>
         <Row style={{"color":"white","backgroundColor":"#262626","padding":"10px"}}>
                <Col
            style={{
            
              margin: "auto",
            }}
          >
            
            <Card.Header as="h5">
                  Topic:{" "}
                  {this.props.lecture.lecture &&
                  this.props.lecture.lecture.topic
                    ? this.props.lecture.lecture.topic
                    : "loading"}
                </Card.Header>
          </Col>
                    
        </Row>
       
        <Row
          style={{
            backgroundColor: "#EDEDED",
            paddingTop: "20px",
            paddingBottom: "20px",
          }}
        >
          <br />
          <br />
          <Col
            style={{
              maxWidth: "800px",
              float: "right",
              margin: "auto",
              marginRight: "0px",
            }}
          >
            {this.state.pdf_link ? <PDF page={this.state.page} link={this.state.pdf_link}/> : "PDF Loading" }
          </Col>
          <Col style={{ maxWidth: "600px", marginRight: "auto" }} xs={4}>
            <ChatPage inputValue={this.state.id} />
          </Col>
        </Row>

        <Container >
          <Row >
            <Col xs="12">
              <Card bg="dark" text="white">
                <Card.Header as="h5">
                Lecture Presentation Options
                </Card.Header>
                <Card.Body>
                  <Card.Title> {this.state.numOfPages ?  this.state.numOfPages : ""}</Card.Title>
                  <Card.Text>
                    <Row>
                      <Col xs={3} style={{ "text-align": "right" }}>
                        <h6>Upload PDF</h6>
                      </Col>

                        <PDFUpload parentCallback={this.callbackFunction} />
  
                    </Row>
                    <br/>
                    <Row>
                      <Col xs={3} style={{ "text-align": "right" }}>
                        <h6>Slide Number</h6>
                      </Col>
                      <Col xs={3}>
                        <input
                          class="form-control form-control-lg"
                          placeholder="Set Presentation Slide"
                          id="page"
                          prefix={"test"}
                          type="text"
                          value={this.state.page}
                          onChange={this.handlePageChange}
                        />
                      </Col>
      
                      <Col xs={3}>
                        <Button
                          variant="primary"
                          type="button"
                          id="button-addon1"
                          type="primary"
                          style={{ width: "100%" }}
                          onClick={this.setPage}
                          htmlType="submit"
                        >
                          Set
                        </Button>
                      </Col>
                    </Row>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    lecture: state.lecture,
    lectureLoading: state.lecture.loading,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getLecture: (id) => dispatch(getLecture(id)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Lecture);
