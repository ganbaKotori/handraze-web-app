import PDFViewer from "mgr-pdf-viewer-react";
import pdf from "../../../pdfs/LBP-Presentation.pdf";
import { degrees, PDFDocument, rgb, StandardFonts } from 'pdf-lib';

import React, { Component, useState } from "react";

export class PDF extends Component {
  constructor(props) {
    super(props);
    
  }

  async pdfStuff(){
    const existingPdfBytes = await fetch(this.props.link).then(res => res.arrayBuffer())
    const pdfDoc = await PDFDocument.load(existingPdfBytes)
 
    // Embed the Helvetica font
     
    // Get the first page of the document
    const pages = pdfDoc.getPages()
    console.log(pages.length)

  }

  render() {
    this.pdfStuff()
    return (

      <PDFViewer
        document={{
          url: this.props.link,
          
        }}
        scale={1} page={parseInt(this.props.page, 10)}
      />

    );
  }
}
