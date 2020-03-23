import React, {Component} from 'react';
import html2canvas from 'html2canvas';
import {Button} from 'antd';
import * as jsPDF from 'jspdf';
import * as PropTypes from 'prop-types';

export default class Export extends Component {
  buttonStatesEnum = Object.freeze({
    READY: "Export to PDF",
    LOADING: "Exporting PDF",
    FAILED: "PDF Export Failed. Retry?"
  });


  constructor(props) {
    super(props);
    this.state = {
      buttonState: this.buttonStatesEnum.READY
    };
  }

  async printDocument(pdfName, div_ids) {
    this.setState({ buttonState: this.buttonStatesEnum.LOADING });

    let pdf = new jsPDF('p', 'mm');
    for (let x = 0; x < div_ids.length; x++) {
      const input = document.getElementById(div_ids[x]);
      await html2canvas(input, {
        scrollX: 0,
        scrollY: -window.scrollY
      }).then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        let position = 0;
        let imgWidth = 210;
        let pageHeight = 295;
        let imgHeight = canvas.height * imgWidth / canvas.width;
        let heightLeft = imgHeight;
        if (x > 0) {
          pdf.addPage();
        }
        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight+15);
        heightLeft -= pageHeight;

        while (heightLeft >= 0) {
          position = heightLeft - imgHeight;
          pdf.addPage();
          pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight + 15);
          heightLeft -= pageHeight;
        }
      }).catch((error) =>{
        console.log(error);
        this.setState({ buttonState: this.buttonStatesEnum.FAILED });
      });
    }
    try {
      pdf.save(pdfName + ".pdf");
      this.setState({ buttonState: this.buttonStatesEnum.READY });
    } catch(error) {
      console.log(error);
      this.setState({ buttonState: this.buttonStatesEnum.FAILED });
    }
  }

  render() {
    const { pdfName, divIdsToPrint } = this.props;
    const { buttonState } = this.state;

    return (
    <div>
        <Button size="large"
                type="primary"
                loading={buttonState === this.buttonStatesEnum.LOADING}
                danger={buttonState === this.buttonStatesEnum.FAILED}
                onClick={() => this.printDocument(pdfName, divIdsToPrint)}>
          {buttonState}
        </Button>
    </div>);
  }
}

Export.propTypes = {
  pdfName: PropTypes.string.isRequired,
  divIdsToPrint: PropTypes.arrayOf(PropTypes.string).isRequired
};