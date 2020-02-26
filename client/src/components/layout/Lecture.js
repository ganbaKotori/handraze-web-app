import React, { Component } from "react";
import { PDF } from "./PDFviewer";
import htmlpdf from "html2pdf.js";

class Lecture extends Component {
  constructor(props) {
    super(props);
    this.state = { showPopup: false };
    this.test = this.test.bind(this);
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
    return (
      <div>
        <button onClick={this.test}>Generate PDF</button>
        <div id="test">
          <h1>Introduction to David Garza 101: Wackology</h1>
        </div>
        <div className="lecture">
          <div className="pdf-viewer">
            <PDF />
          </div>
        </div>
      </div>
    );
  }
}

export default Lecture;
