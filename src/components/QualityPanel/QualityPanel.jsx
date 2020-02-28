import React, { useState } from 'react';
import OriginElement from '../OriginElement';

import './style.css';

const OriginPanel = (props) => {
  const {

  } = props;

  const [itemsDisplay, setItemsDisplay] = useState(true);
  const toggleItemsDisplay = () => setItemsDisplay(!itemsDisplay);

  return (
    <div className="panelBox">
      <h1>Quality</h1>
      <button 
          className="toggleButton" 
          onClick={toggleItemsDisplay}>
            { itemsDisplay? "Hide Quality" : "Show Quality" }
      </button>
      { itemsDisplay?
          <div>
            <OriginElement  party="awfull"/>
            <OriginElement  party="normal"/>
            <OriginElement  party="exceptionall"/>
            <OriginElement  party="perfect"/>
          </div>
        :
        <div/>
      }
    </div>
  )
};

export default (OriginPanel);