import React from 'react';

import './style.css';

const ShowResult = (props) => {
  const {
    quality,
    item,
    origin,
  } = props;

  return (
      <div className="showBox">
        
        <div className="infoBox">
        <h2>Quality</h2>
          <p>{quality}</p>
        </div>
        <div className="itemBox">
        <h2>Item</h2>
          <p>{item}</p>
        </div>
        <div className="infoBox">
        <h2>Origin</h2>
          <p>{origin}</p>
        </div>
      </div>
  )
};

ShowResult.defaultProps = {
  quality: "perfect",
  item: "Warhammer",
  origin: "Empire",
};

export default (ShowResult);