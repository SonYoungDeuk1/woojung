import React, { Component } from "react";
import {Document, Page } from "react-pdf";

export default class FileViewer extends Component {
  render() {
    return (
      <div>
        <Document
          file="https://s3-ap-southeast-1.amazonaws.com/happay-local/HVP/BILL20198261213473719445688HP.pdf"
          onLoadSuccess={this.onDocumentLoadSuccess}
        >
          <Page pageNumber={1} />
        </Document>
      </div>
    );
  }
}