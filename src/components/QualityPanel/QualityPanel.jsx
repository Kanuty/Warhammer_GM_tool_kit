import React, { useEffect, useState  } from 'react';
import OriginElement from '../OriginElement';

import './style.css';

const OriginPanel = (props) => {
  const {

  } = props;

  const [itemsDisplay, setItemsDisplay] = useState(true);
  const toggleItemsDisplay = () => setItemsDisplay(!itemsDisplay);

  const [valueOfAwfull , setValueOfAwfull] = useState(0);
  const [valueOfNormal , setValueOfNormal] = useState(0);
  const [valueOfExceptionall , setValueOfExceptionall] = useState(0);
  const [valueOfPerfect , setValueOfPerfect] = useState(0);

  function handleChange () {
    props.onChange(
    [
      valueOfAwfull,
      valueOfNormal,
      valueOfExceptionall,
      valueOfPerfect
    ])
  }

  useEffect( () => {handleChange()}, 
  [
    valueOfAwfull,
    valueOfNormal,
    valueOfExceptionall,
    valueOfPerfect
  ]
  ) 
  
  return (
    <div className="panelBox">
      <h1 className="activeFlag">Quality of Awfull</h1>
      <button 
          className="toggleButton" 
          onClick={toggleItemsDisplay}>
            { itemsDisplay? "Hide Quality" : "Show Quality" }
      </button>
      { itemsDisplay?
          <div>
            <OriginElement  party="awfull" onChange={setValueOfAwfull}/>
            <OriginElement  party="normal" onChange={setValueOfNormal}/>
            <OriginElement  party="exceptionall" onChange={setValueOfExceptionall}/>
            <OriginElement  party="perfect" onChange={setValueOfPerfect}/>
          </div>
        :
        <div/>
      }
    </div>
  )
};

export default (OriginPanel);