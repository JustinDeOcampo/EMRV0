import React from 'react';
import PropTypes from 'prop-types';
import { Document } from '@react-pdf/renderer';
import FormDevPdfPage from './FormDevPdfPage';
import FormSymPdfPage from './FormSymPdfPage';

class PatientDocument extends React.Component {
  render() {
    const { patientData } = this.props;
    const { formDevData, formSymData } = patientData

    return (
      <Document>
        <FormDevPdfPage data={formDevData}/>
        <FormSymPdfPage data={formSymData}/>
      </Document>
    )
  }
}


PatientDocument.propTypes = {
  patientData: PropTypes.object.isRequired
};

export default PatientDocument