import React from 'react';
import ReactToPdf from "react-to-pdf";

class PdfExportButton extends React.Component {
  render() {
    const { componentToPdfRef } = this.props;
    return (
      <div>
        <ReactToPdf targetRef={componentToPdfRef} filename="melmed-patient-form.pdf">
          {({toPdf}) => (
            <button onClick={toPdf}>Generate pdf</button>
          )}
        </ReactToPdf>
      </div>
    )
  }
}

export default PdfExportButton