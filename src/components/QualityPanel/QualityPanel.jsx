import React from 'react';
import OriginElement from '../OriginElement';

import './style.css';

const OriginPanel = (props) => {
  const {

  } = props;

  return (
    <div className="panelBox">
      <h1>Quality</h1>
          <div>
            <OriginElement  party="awfull"/>
            <OriginElement  party="normal"/>
            <OriginElement  party="exceptionall"/>
            <OriginElement  party="perfect"/>
          </div>
    </div>
  )
};

export default (OriginPanel);