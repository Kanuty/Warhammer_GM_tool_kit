import React, { useState } from 'react';
import standard from '../../img/symbols/default.png'

import './style.css';

const OriginElement = (props) => {
  const {
    logo,
    party,
  } = props;

  const [chance, setPercentage] = useState('5')

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
              <p className="activeParagraph"> <i>{party}</i> chance multiplayer <b>x{chance}</b></p>
              :
              <p> <i>{party}</i> inactive</p>
              }
              <input
                type="range"
                className="slider"
                min="1"
                max="10"
                id={`${party}slider`}
                name={party}
                value={chance}
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