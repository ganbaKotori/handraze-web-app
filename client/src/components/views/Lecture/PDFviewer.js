import PDFViewer from "mgr-pdf-viewer-react";
import pdf from "../../../pdfs/LBP-Presentation.pdf";

import React, { Component, useState } from "react";

export class PDF extends Component {
  constructor(props) {
    super(props);
  }

  render() {alert(this.props.link)
    return (
      
      <PDFViewer
        document={{
          url: this.props.link,
          
        }}
        scale={1.15} page={69}
      />
    );
  }
}
