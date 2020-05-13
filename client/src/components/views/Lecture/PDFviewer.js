import PDFViewer from "mgr-pdf-viewer-react";
import pdf from "../../../pdfs/LBP-Presentation.pdf";

import React, { Component, useState } from "react";

export class PDF extends Component {
  constructor(props) {
    super(props);
  }

  render() {//alert(this.props.link)
    //alert(this.props.page)
    return (

      <PDFViewer
        document={{
          url: this.props.link,
          
        }}
        scale={1.2} page={parseInt(this.props.page, 10)}

        //hideNavbar = {true}
      />

    );
  }
}
