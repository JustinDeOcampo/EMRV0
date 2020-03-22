import React from 'react';
import PropTypes from 'prop-types';
import {Page, Text} from '@react-pdf/renderer';

class FormDevPdfPage extends React.Component {
  render() {
    const { data } = this.props;

    return (
      <Page>
        <Text>
          Patient intake data goes here
          {data}
        </Text>
      </Page>
    )
  }
}


FormDevPdfPage.propTypes = {
  data: PropTypes.object.isRequired
};

export default FormDevPdfPage