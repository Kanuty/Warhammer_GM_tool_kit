import React, { useState } from 'react';
import chaotic from '../../img/symbols/chaotic.png'

import './style.css';

const OriginElement = (props) => {
  const {
    logo,
    party,
  } = props;

  const [chance, setTitle] = useState('50')

  return (
      <div className="checkBox">
        <div className="labelBox">
          <input
            type="checkbox"
            id={party}
            name={party}
            
          />
          <label htmlFor={party}>
            <img src={logo}></img>
          </label>
            <div className="sliderBox">
              <p>{party} {chance} %</p>
              <input
                type="range"
                className="slider"
                min="1"
                max="100"
                id={`${party}slider`}
                name={party}
                onChange={event => setTitle(event.target.value)}
              />
            </div>
        </div>
      </div>
  )
};

OriginElement.defaultProps = {
  logo: chaotic,
  party: "Chaos"
};



export default (OriginElement);