import React from 'react';

import  { mele, ranged, armor, potion, general, treasure, food, clothes, tools } from '../../constants/itemsVault';
import  { itemColection } from '../../constants/arrays';
import './style.css';

const ShowResult = (props) => {
  const {
    indexOfItem,
    itemType,
    origin,
    quality
  } = props;

  

  return (
      <div className="showBox">
        <div className="lazybox">
          <div className="infoBox">
            <h2>Quality</h2>
            <p className={quality}>{quality}</p>
          </div>
          <div className="infoBox">
            <h2>Origin</h2>
            <p className="origin">{origin}</p>
          </div>
          <div className="infoBox">
            <h2>itemType</h2>
            <p className="type">{itemType}</p>
          </div>
        </div>

        <div>
        {itemType === itemColection[0]?
          <div className="itemBox">
            <p><b>name:</b><i><u> {mele[indexOfItem].name} </u></i></p>
            <p><b>value:</b><i> {mele[indexOfItem].value}</i></p>
            <p><b>group:</b><i> {mele[indexOfItem].group}</i></p>
            <p><b>power:</b><i> {mele[indexOfItem].power}</i></p>
            <p><b>qualities:</b><i> {mele[indexOfItem].qualities}</i></p>
          </div>
        :itemType === itemColection[1]?
          <div className="itemBox">
            <p><b>name:</b><i><u> {ranged[indexOfItem].name} </u></i></p>
            <p><b>value:</b><i> {ranged[indexOfItem].value}</i></p>
            <p><b>group:</b><i> {ranged[indexOfItem].group}</i></p>
            <p><b>power:</b><i> {ranged[indexOfItem].power}</i></p>
            <p><b>range:</b><i> {ranged[indexOfItem].range}</i></p>
            <p><b>qualities:</b><i> {ranged[indexOfItem].qualities}</i></p>
          </div>
        :itemType === itemColection[2]?
          <div className="itemBox">
            <p><b>name:</b><i><u> {armor[indexOfItem].name} </u></i></p>
            <p><b>value:</b><i> {armor[indexOfItem].value}</i></p>
            <p><b>location:</b><i> {armor[indexOfItem].location}</i></p>
            <p><b>armor:</b><i> {armor[indexOfItem].armor}</i></p>
          </div>
          :itemType === itemColection[3]?
          <div className="itemBox">
            <p><b>name:</b><i><u> {potion[indexOfItem].name} </u></i></p>

          </div>
          :itemType === itemColection[4]?
          <div className="itemBox">
            <p><b>name:</b><i><u> {general[indexOfItem].name} </u></i></p>

          </div>
          :itemType === itemColection[5]?
          <div className="itemBox">
            <p><b>name:</b><i><u> {treasure[indexOfItem].name} </u></i></p>

          </div>
          :itemType === itemColection[6]?
          <div className="itemBox">
            <p><b>name:</b><i><u> {food[indexOfItem].name} </u></i></p>

          </div>
          :itemType === itemColection[7]?
          <div className="itemBox">
            <p><b>attire:</b><i><u> {clothes[indexOfItem].attire} </u></i></p>
            <p><b>value:</b><i> {clothes[indexOfItem].value}</i></p>
          </div>
          :itemType === itemColection[8]?
          <div className="itemBox">
            <p><b>name:</b><i><u> {tools[indexOfItem].name} </u></i></p>
            <p><b>value:</b><i> {tools[indexOfItem].value}</i></p>
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