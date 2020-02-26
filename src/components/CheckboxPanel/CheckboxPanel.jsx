import React from 'react';
import chaotic from '../../img/symbols/chaotic.png'
import skavenish from '../../img/symbols/skavenish.png'
import './style.css';

const CheckboxPanel = (props) => {
  const {
    logo
  } = props;

  return (
    <div className="panelBox">
      <div className="checkBox">
        <div className="labelBox">
          <input
            type="checkbox"
            id="Chaos"
            name="Chaos"
          />
          <label htmlFor="Chaos">
            <img src={chaotic}></img>
          </label>
            <div className="sliderBox">
              <p>Chaos /place for slider value/</p>
              <input
                type="range"
                className="slider"
                min="1"
                max="100"
                id="ChaosSlider"
                name="Chaos"
              />
            </div>
        </div>
      </div>
      
      <div className="checkBox">
        <div className="labelBox">
          <input
            type="checkbox"
            id="Skaven"
            name="Skaven"
          />
          <label htmlFor="Skaven"><img src={skavenish}></img></label>
        </div>
        <div className="sliderBox">
          <input
            type="range"
            className="slider"
            min="1" max="100" id="party" name="Skaven" />

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

CheckboxPanel.defaultProps = {
  logo: chaotic,
};



export default (CheckboxPanel);