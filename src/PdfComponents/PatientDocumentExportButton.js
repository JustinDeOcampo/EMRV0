import React from 'react';
import {Button, Form} from 'antd';
import PropTypes from 'prop-types';
import {PDFDownloadLink} from '@react-pdf/renderer';
import PatientDocument from './PatientDocument';

class PatientDocumentExportButton extends React.Component {
  render() {
    const { patientData } = this.props;
    return (
      <Button size='large' type="primary" htmlType="submit">
        <PDFDownloadLink document={<PatientDocument patientData={patientData}/>} fileName="melmed-forms.pdf">
          {({ blob, url, loading, error }) => (loading ? 'Loading document...' : 'Download now')}
        </PDFDownloadLink>
      </Button>
    )
  }
}


PatientDocumentExportButton.propTypes = {
  patientData: PropTypes.object.isRequired
};

export default PatientDocumentExportButton