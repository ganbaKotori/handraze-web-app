import PDFViewer from "mgr-pdf-viewer-react";
import pdf from "../../pdfs/LBP-Presentation.pdf";

import React, { Component, useState } from "react";

export class PDF extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <PDFViewer
        document={{
          url: pdf
        }}
        scale={1.15}
      />
    );
  }
}
