import React, {useState } from 'react';
import OriginElement from '../OriginElement';

import './style.css';

const ItemsPanel = (props) => {
  const {

  } = props;

  const [militaryDisplay, setMilitaryDisplay] = useState(true);
  const [civilianDisplay, setCivilianDisplay] = useState(false);
  const toggleMilitaryDisplay = () => setMilitaryDisplay(!militaryDisplay);
  const toggleCivilianDisplay = () => setCivilianDisplay(!civilianDisplay);

  return (
    <div className="panelBox">
      <h1>Items</h1>
      <button 
          className="toggleButton" 
          onClick={toggleMilitaryDisplay}>
            { militaryDisplay? "Hide Military" : "Show Military" }
      </button>
        { militaryDisplay?
          <div id="miltaryContainer">
            <OriginElement party="mele weapons"/>
            <OriginElement party="ranged weapons"/>
            <OriginElement party="armors"/>
            <OriginElement party="potions"/>
            <OriginElement party="exotics"/>
          </div>
          :
          <div/>
        }
        <button 
          className="toggleButton" 
          onClick={toggleCivilianDisplay}>
            { civilianDisplay? "Hide Civilian" : "Show Civilian" }
        </button>
          { civilianDisplay?
          <div id="civilianContainer">
            <OriginElement party="general equipment"/>
            <OriginElement party="treasures"/>
            <OriginElement party="food"/>
            <OriginElement party="cloaths"/>
            <OriginElement party="tools"/>
          </div>
          :
          <div/>
          }
    </div>
  )
};

export default (ItemsPanel);