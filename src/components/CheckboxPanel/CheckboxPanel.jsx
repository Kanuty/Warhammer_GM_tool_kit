import React from 'react';
import OriginElement from '../OriginElement';
import chaotic from '../../img/symbols/chaotic.png'
import skavenish from '../../img/symbols/skavenish.png'
import vampiric from '../../img/symbols/vampiric.png'
import imperial from '../../img/symbols/imperial.png'
import dwarvish from '../../img/symbols/dwarvish.png'
import './style.css';

const CheckboxPanel = (props) => {
  const {
    logo
  } = props;

  return (
    <div className="panelBox">
      <h2>Origin</h2>
      <OriginElement logo={chaotic} party="Chaos"/>
      <OriginElement logo={skavenish} party="Skaven"/>
      <OriginElement logo={vampiric} party="Vampires"/>
      <OriginElement logo={imperial} party="Imperium"/>
      <OriginElement logo={dwarvish} party="Dwarfs"/>
    </div>
  )
};

export default (CheckboxPanel);