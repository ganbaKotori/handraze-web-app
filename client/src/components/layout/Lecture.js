import React, { Component } from "react";
import { PDF } from "./PDFviewer";

class Lecture extends Component {
  constructor(props) {
    super(props);
    this.state = { showPopup: false };
  }

  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup
    });
  }
  render() {
    return (
      <div className="pdf">
        <br />
        <PDF />
      </div>
    );
  }
}

export default Lecture;
