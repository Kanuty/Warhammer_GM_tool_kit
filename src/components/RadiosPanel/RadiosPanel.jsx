import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';

import styles from './styles.js';

const RadiosPanel = (props) => {

  const {
    containerClass,
    id,
    inputClass,
    name,
    type,
    value,
  } = props;

return (
  <div id={containerClass}>
    <div class={inputClass} >
      <input 
        type={type}
        name={name}
        id={id[0]}
        value={value[0]}
        checked
      />
      <label class="1">{value[0]}</label>
    </div>
    <div class={inputClass} >
      <input 
        type={type}
        name={name}
        id={id[1]}
        value={value[1]}
      />
      <label class="1">{value[1]}</label>
    </div>
    <div class={inputClass} >
      <input
        type={type}
        name={name}
        id={id[2]}
        value={value[2]}
      />
      <label class="1">{value[2]}</label>
    </div>
    <div class={inputClass} >
      <input
      type={type}
      name={name}
      id={id[3]}
      value={value[3]}
    />
      <label class="1">{value[3]}</label>
    </div>
  </div>
  )
};

RadiosPanel.propTypes = {
  containerClass: PropTypes.string,
  id: PropTypes.number.isRequired,
  inputClass: PropTypes.string,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  value: PropTypes.arrayOf(PropTypes.string).isRequired,
};

RadiosPanel.defaultProps = {
  containerClass: "setups__rarity",
  inputClass: "rarity",
  type: "radio",
};

export default withStyles(styles)(RadiosPanel);