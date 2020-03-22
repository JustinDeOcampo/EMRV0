import React from 'react';
import PropTypes from 'prop-types';
import {Page, Text} from '@react-pdf/renderer';

class FormSymPdfPage extends React.Component {
  render() {
    const { data } = this.props;

    return (
      <Page>
        <Text>
          Patient symptoms data goes here
          {data}
        </Text>
      </Page>
    )
  }
}


FormSymPdfPage.propTypes = {
  data: PropTypes.object.isRequired
};

export default FormSymPdfPage