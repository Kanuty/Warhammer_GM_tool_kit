import React, { useState } from 'react';
import standard from '../../img/symbols/default.png'

import './style.css';

const OriginElement = (props) => {
  const {
    initialValue,
    logo,
    party,
  } = props;

  const [chance, setPercentage] = useState(initialValue)
  const [isActive, setIsActive] = useState(false);

  function changeInValue(event) {
    setPercentage(event.target.value)
    if (isActive === true)
    {props.onChange(event.target.value)}
    else {props.onChange(0)};
  }

  function changeInActive() {
    setIsActive(!isActive)
    if (isActive === false)
    {props.onChange(chance)}
    else {props.onChange(0)}
  }

  return (
      <div className="checkBox">
        <div className="labelBox">
          <input
            type="checkbox"
            id={party}
            name={party}
            onClick={changeInActive} 
          />
          <label htmlFor={party}>
            <img src={logo}></img>
          </label>
            <div className="sliderBox">
              {isActive?
              <p className="activeParagraph"> <i>{party}</i> chance multiplayer <b>x{chance}</b></p>
              :
              <p> <i>{party} is innactive</i></p>
              }
              <input
                type="range"
                className="slider"
                min="1"
                max="10"
                id={`${party}slider`}
                name={party}
                value={chance}
                onChange={changeInValue}
              />
            </div>
        </div>
      </div>
  )
};

OriginElement.defaultProps = {
  initialValue: 5,
  logo: standard,
  party: "default",
};

export default (OriginElement);