import React from 'react';
import './style.css';

const CheckboxPanel = (props) => {
  const {

  } = props;

  return (
    <div className="panelBox">
      <div className="checkBox">
        <div>
          <input
            type="checkbox"
            id="party"
            name="Chaos"
            />
            <label htmlFor="party">Chaos</label>
        </div>
        <div className="sliderBox">
          <input
            type="range"
            className="slider"
            min="1" max="100" id="party" name="Chaos" />

        </div>
      </div>

      {/* <label htmlFor="party">Imperial</label>
      <input type="checkbox" id="party" name="Imperial"/>

      <input type="range" className="slider" min="1" max="100" id="party" name="Imperial"/>
     
      <label htmlFor="party">Skaven</label>
      <input type="checkbox" id="party" name="Skaven"/>

      <input type="range" className="slider" min="1" max="100" id="party" name="Skaven"/> */}
    </div>
  )
};


export default (CheckboxPanel);