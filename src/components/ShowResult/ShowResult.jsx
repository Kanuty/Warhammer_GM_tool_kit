import React from 'react';

import './style.css';

const ShowResult = (props) => {
  const {
    quality,
    itemType,
    origin,
  } = props;

  const sword = {name:"sword", value:20, category:"common", power:"S", properties:"none", special:"none"}
  const hammer = {name:"hammer", value:20, category:"common", power:"S", properties:"none", special:"none"}
  const axe = {name:"axe", value:20, category:"common", power:"S", properties:"none", special:"none"}
  const testArray = [sword, hammer, axe]

  function randomResult (input) {
  return  ( input[Math.floor(Math.random() * input.length)])
  };
  
  let meleWeapon = randomResult(testArray)

  return (
      <div className="showBox">
        <div className="lazybox">
          <div className="infoBox">
            <h2>Quality</h2>
            <p className={quality}>{quality}</p>
          </div>
          <div className="infoBox">
            <h2>Origin</h2>
            <p>{origin}</p>
          </div>
          <div className="infoBox">
            <h2>itemType</h2>
            <p>{itemType}</p>
          </div>
        </div>

        <div>
          {itemType === "mele weapon"?
          
          <div className="itemBox">
            <p>name: <i>{meleWeapon.name}</i></p>
            <p>value: <i>{meleWeapon.value}</i> gc</p>
            <p>categroy: <i>{meleWeapon.category}</i></p>
            <p>power: <i>{meleWeapon.power}</i></p>
            <p>properties: <i>{meleWeapon.properties}</i></p>
            <p>special: <i>{meleWeapon.special}</i></p>
          </div>
          :
          <div/>}
         </div>
      </div>
  )
};

ShowResult.defaultProps = {
  quality: "perfect",
  itemType: "mele weapon",
  origin: "Empire",
};

export default (ShowResult);