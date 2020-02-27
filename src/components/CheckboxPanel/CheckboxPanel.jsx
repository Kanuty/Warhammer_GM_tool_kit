import React, { useState } from 'react';
import OriginElement from '../OriginElement';
import chaotic from '../../img/symbols/chaotic.png'
import khorne from '../../img/symbols/khorne.png'
import tzeentch from '../../img/symbols/tzeentch.png'
import slaanesh from '../../img/symbols/slaanesh.png'
import nurgle from '../../img/symbols/nurgle.png'
import skaven from '../../img/symbols/skavenish.png'
import sylvanic from '../../img/symbols/vampiric.png'
import norsca from '../../img/symbols/norsca.png'
import imperium from '../../img/symbols/imperial.png'
import dwarfs from '../../img/symbols/dwarvish.png'
import kislev from '../../img/symbols/kislev.png'
import estalia from '../../img/symbols/estalia.png'
import bretonia from '../../img/symbols/bretonia.png'
import greenskins from '../../img/symbols/greenskins.png'
import tilea from '../../img/symbols/tilea.png'
import border from '../../img/symbols/border.png'
import beastmen from '../../img/symbols/beastmen.png'
import lustria from '../../img/symbols/lustria.png'
import khemri from '../../img/symbols/khemri.png'
import highElfs from '../../img/symbols/highElfs.png'
import woodElfs from '../../img/symbols/woodElfs.png'
import naggarond from '../../img/symbols/naggarond.png'
import ogres from '../../img/symbols/ogres.png'
import chaosDwarfs from '../../img/symbols/chaosDwarfs.png'

import './style.css';

const CheckboxPanel = (props) => {
  const {

  } = props;

  const [chaosDisplay, setChaosDisplay] = useState(false);
  const [humanKingdomsDisplay, setHumanKingdomsDisplay] = useState(false);
  const [othersDisplay, setOtherDisplay] = useState(false);
  const toggleChaosDisplay = () => setChaosDisplay(!chaosDisplay);
  const toggleHumanKingdomsDisplay = () => setHumanKingdomsDisplay(!humanKingdomsDisplay);
  const toggleOthersDisplay = () => setOtherDisplay(!othersDisplay);

  // To do: When at least one OriginElement is acrive, than toggle button change collor.

  return (
    <div className="panelBox">
      <h1>Origin</h1>
        <button 
          className="toggleButton" 
          onClick={toggleChaosDisplay}>
            { chaosDisplay? "Hide Chaos" : "Show Chaos" }
        </button>
        { chaosDisplay?
          <div id="chaosContainer">
            <OriginElement logo={chaotic} party="Chaos Undivided"/>
            <OriginElement logo={nurgle} party="Nurgle"/>
            <OriginElement logo={khorne} party="Khorne"/>
            <OriginElement logo={tzeentch} party="Tzeentch"/>
            <OriginElement logo={slaanesh} party="Slaanesh"/>
            <OriginElement logo={skaven} party="Under Empire"/>
            <OriginElement logo={norsca} party="Norsca"/>
            <OriginElement logo={beastmen} party="Wildness"/>
            <OriginElement logo={chaosDwarfs} party="Dark Lands"/>
          </div>
        : 
          <div/>}
        <button 
          className="toggleButton" 
          onClick={toggleHumanKingdomsDisplay}>
            { humanKingdomsDisplay? "Hide Human Kingdoms" : "Show Human kingdoms" }
        </button>
        { humanKingdomsDisplay?
          <div id="humanKingdomsContainer">
            <OriginElement logo={imperium} party="Imperium"/>
            <OriginElement logo={bretonia} party="Bretonia"/>
            <OriginElement logo={estalia} party="Estalia"/>
            <OriginElement logo={kislev} party="Kislev"/>
            <OriginElement logo={tilea} party="Tilea"/>
            <OriginElement logo={border} party="Border Princes"/>
            <OriginElement party="Ind"/>
            <OriginElement party="Arraby"/>
            <OriginElement party="Nippon"/>
            <OriginElement party="Cathay"/>
         </div>
         :
          <div/> }
        <button 
          className="toggleButton" 
          onClick={toggleOthersDisplay}>
            { othersDisplay? "Hide Others" : "Show Others" }
        </button>
        { othersDisplay?
          <div  id="othersContainer">
            <OriginElement logo={sylvanic} party="Sylvania"/>
            <OriginElement logo={khemri} party="Khemri"/>
            <OriginElement logo={dwarfs} party="Worlds Edge Mountains"/>
            <OriginElement logo={greenskins} party="Badlands"/>
            <OriginElement logo={lustria} party="Lustria"/>
            <OriginElement logo={woodElfs} party="Athel Loren"/>
            <OriginElement logo={highElfs} party="Ulthuan"/>
            <OriginElement logo={naggarond} party="Naggarond"/>
            <OriginElement logo={ogres} party="Mountains of Mourn"/>
            <OriginElement party="Eastern Steppes"/>
          </div>
        :
          <div/> }
    </div>
  )
};

export default (CheckboxPanel);