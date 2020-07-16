import React from 'react';
import PropTypes from 'prop-types';

const Alert = ({ message, success }) => (
  <div className={`Alert ${success ? 'success' : 'error'}`}>
    {message}
  </div>
);

Alert.propTypes = {
  message: PropTypes.string.isRequired,
  success: PropTypes.bool,
};

Alert.defaultProps = {
  success: false,
};

export default Alert;
