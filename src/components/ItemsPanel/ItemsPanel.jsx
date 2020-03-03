import React, { useEffect, useState } from 'react';
import OriginElement from '../OriginElement';

import './style.css';

const ItemsPanel = (props) => {
  const {

  } = props;

  const [militaryDisplay, setMilitaryDisplay] = useState(true);
  const [civilianDisplay, setCivilianDisplay] = useState(false);
  const toggleMilitaryDisplay = () => setMilitaryDisplay(!militaryDisplay);
  const toggleCivilianDisplay = () => setCivilianDisplay(!civilianDisplay);

  const [valueOfMeleWeapons , setValueOfMeleWeapons] = useState(0);
  const [valueOfRangedWeapons , setValueOfRangedWeapons] = useState(0);
  const [valueOfArmors , setValueOfArmors] = useState(0);
  const [valueOfPotions , setValueOfPotions] = useState(0);

  const [valueOfGeneralEquipment , setValueOfGeneralEquipment] = useState(0);
  const [valueOfTreasures , setValueOfTreasures] = useState(0);
  const [valueOfFood , setValueOfFood] = useState(0);
  const [valueOfClothes , setValueOfClothes] = useState(0);
  const [valueOfTools , setValueOfTools] = useState(0);

  function handleChange () {
    props.onChange(
    [
      valueOfMeleWeapons,
      valueOfRangedWeapons,
      valueOfArmors,
      valueOfPotions,
      valueOfGeneralEquipment,
      valueOfTreasures,
      valueOfFood,
      valueOfClothes,
      valueOfTools
    ])
  }

  useEffect( () => {handleChange()}, 
    [ valueOfMeleWeapons,
      valueOfRangedWeapons,
      valueOfArmors,
      valueOfPotions,
      valueOfGeneralEquipment,
      valueOfTreasures,
      valueOfFood,
      valueOfClothes,
      valueOfTools
    ]
  ) 

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
            <OriginElement party="mele weapons" onChange={ setValueOfMeleWeapons }/>
            <OriginElement party="ranged weapons" onChange={ setValueOfRangedWeapons }/>
            <OriginElement party="armors" onChange={ setValueOfArmors }/>
            <OriginElement party="potions" onChange={ setValueOfPotions }/>
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
            <OriginElement party="general equipment"  onChange={ setValueOfGeneralEquipment }/>
            <OriginElement party="treasures"  onChange={ setValueOfTreasures }/>
            <OriginElement party="food"  onChange={ setValueOfFood }/>
            <OriginElement party="clothes"  onChange={ setValueOfClothes }/>
            <OriginElement party="tools"  onChange={ setValueOfTools }/>
          </div>
          :
          <div/>
          }
    </div>
  )
};

export default (ItemsPanel);