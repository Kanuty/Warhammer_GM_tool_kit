import React from 'react';

import  { mele, ranged, armor } from '../../constants/itemsVault';
import  { itemColection } from '../../constants/arrays';
import './style.css';

const ShowResult = (props) => {
  const {
    indexOfItem,
    itemType,
    origin,
    quality
  } = props;


  // const testArray = [sword, hammer, axe]

  // function randomResult (input) {
  // return  ( input[Math.floor(Math.random() * input.length)])
  // };
  
  // let meleWeapon = randomResult(testArray)

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
        {itemType === itemColection[0]?
          <div className="itemBox">
            <p><b>name:</b><i><u> {mele[0].name} </u></i></p>
            <p><b>value:</b><i> {mele[0].value}</i> gc</p>
            <p><b>group:</b><i> {mele[0].group}</i></p>
            <p><b>power:</b><i> {mele[0].power}</i></p>
            <p><b>qualities:</b><i> {mele[0].qualities}</i></p>
          </div>
        :itemType === itemColection[1]?
          <div className="itemBox">
            <p><b>name:</b><i><u> {ranged[0].name} </u></i></p>
            <p><b>value:</b><i> {ranged[0].value}</i> gc</p>
            <p><b>group:</b><i> {ranged[0].group}</i></p>
            <p><b>power:</b><i> {ranged[0].power}</i></p>
            <p><b>range:</b><i> {ranged[0].range}</i></p>
            <p><b>qualities:</b><i> {ranged[0].qualities}</i></p>
          </div>
        :itemType === itemColection[2]?
          <div className="itemBox">
            <p><b>name:</b><i><u> {armor[0].name} </u></i></p>
            <p><b>value:</b><i> {armor[0].value}</i></p>
            <p><b>location:</b><i> {armor[0].location}</i></p>
            <p><b>armor:</b><i> {armor[0].armor}</i></p>
          </div>
        : <div/>}
        </div>
      </div>
  )
};

ShowResult.defaultProps = {
  indexOfItem: 0,
  itemType: "mele",
  origin: "Empire",
  quality: "perfect",
};

export default (ShowResult);