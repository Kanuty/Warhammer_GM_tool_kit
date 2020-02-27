import React, { useState } from 'react';
import standard from '../../img/symbols/default.png'

import './style.css';

const OriginElement = (props) => {
  const {
    logo,
    party,
  } = props;

  const [chance, setPercentage] = useState('50')

  const [isActive, setisActive] = useState(false);
  const toggleIsActive = () => setisActive(!isActive);

  return (
      <div className="checkBox">
        <div className="labelBox">
          <input
            type="checkbox"
            id={party}
            name={party}
            onClick={toggleIsActive} 
          />
          <label htmlFor={party}>
            <img src={logo}></img>
          </label>
            <div className="sliderBox">
              {isActive?
              <p className="activeParagraph"> {party} chance * {chance}</p>
              :
              <p> {party} innactive</p>
              }
              <input
                type="range"
                className="slider"
                min="1"
                max="100"
                id={`${party}slider`}
                name={party}
                onChange={event => setPercentage(event.target.value)}
              />
            </div>
        </div>
      </div>
  )
};

OriginElement.defaultProps = {
  logo: standard,
  party: "default"
};

export default (OriginElement);