import React from 'react';
import PropTypes from 'prop-types';


// import styles from './styles.js';

const CheckboxInput = (props) => {
  const {
    label,
  } = props;

  return (
  <CheckboxInput>
    {/* <label>{label}</label> */}
    <input
      type='checbox'
    />
    {/* <input
      type='range'/> */}
  </CheckboxInput>
  )
};

CheckboxInput.propTypes = {
  label: PropTypes.string,
};

CheckboxInput.defaultProps = {
  label: 'Label',
};

export default CheckboxInput