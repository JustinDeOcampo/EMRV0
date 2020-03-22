import React, {Component} from 'react';
import html2canvas from 'html2canvas';
import {Button} from 'antd';
import * as jsPDF from 'jspdf';
import * as PropTypes from 'prop-types';

export default class Export extends Component {
  constructor(props) {
    super(props);
  }

  async printDocument(div_id) {
    const input = document.getElementById(div_id);
    html2canvas(input, {
      scrollX: 0,
      scrollY: -window.scrollY
    }).then((canvas) => {
        // console.log(scrollPos)
        // window.scrollTo(0,scrollPos);
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
    const { divIdToPrint } = this.props;
    return (
    <div>
      <div id="myMm" style={{height: "1mm"}} />
      <div className="mb5">
        <Button size='large'
                type="primary"
                onClick={() => this.printDocument(divIdToPrint)}>
          Export to PDF
        </Button>
      </div>
    </div>);
  }
}

Export.propTypes = {
  divIdToPrint: PropTypes.string.isRequired
};