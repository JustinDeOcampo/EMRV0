import React, {Component} from 'react';
import html2canvas from 'html2canvas';
import {Button} from 'antd';
import * as jsPDF from 'jspdf';

export default class Export extends Component {
  constructor(props) {
    super(props);
  }

  async printDocument(div_id) {
    const input = document.getElementById(div_id);
    await html2canvas(input, {
      windowWidth: input.scrollWidth,
      windowHeight: input.scrollHeight
    });

    html2canvas(input)
      .then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        let pdf = new jsPDF('p', 'mm');
        let position = 0;
        let imgWidth = 210;
        let pageHeight = 295;
        let imgHeight = canvas.height * imgWidth / canvas.width;
        let heightLeft = imgHeight;

        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight+15);
        heightLeft -= pageHeight;

        while (heightLeft >= 0) {
          position = heightLeft - imgHeight;
          pdf.addPage();
          pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight + 15);
          heightLeft -= pageHeight;
        }
        pdf.save("download.pdf");
      })
    ;
  }

  render() {
    return (
    <div>
      <div id="myMm" style={{height: "1mm"}} />
      <div className="mb5">
        <Button onClick={() => this.printDocument('divToPrint')}>Print</Button>
      </div>
    </div>);
  }
}