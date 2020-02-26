import React from 'react';
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

import './style.css';

const CheckboxPanel = (props) => {
  const {
  } = props;

  return (
    <div className="panelBox">
      <h1>Origin</h1>
      <div>
        <h2>Chaos</h2>
        <OriginElement logo={chaotic} party="Chaos Undivided"/>
        <OriginElement logo={nurgle} party="Nurgle"/>
        <OriginElement logo={khorne} party="Khorne"/>
        <OriginElement logo={tzeentch} party="Tzeentch"/>
        <OriginElement logo={slaanesh} party="Slaanesh"/>
        <OriginElement logo={skaven} party="Skaven"/>
        <OriginElement logo={norsca} party="Norsca"/>
        <OriginElement logo={beastmen} party="Wildness"/>
      </div>
      <div>
        <h2>Human Kingdoms</h2>
        <OriginElement logo={imperium} party="Imperium"/>
        <OriginElement logo={bretonia} party="Bretonia"/>
        <OriginElement logo={estalia} party="Estalia"/>
        <OriginElement logo={kislev} party="Kislev"/>
        <OriginElement logo={tilea} party="Tilea"/>
        <OriginElement logo={border} party="Border Princes"/>
      </div>
      <div>
        <h2>Others</h2>
        <OriginElement logo={sylvanic} party="Sylvania"/>
        <OriginElement logo={khemri} party="Khemri"/>
        <OriginElement logo={dwarfs} party="Dwarfs"/>
        <OriginElement logo={greenskins} party="Badlands"/>
        <OriginElement logo={lustria} party="Lustria"/>
        <OriginElement logo={woodElfs} party="Athel Loren"/>
        <OriginElement logo={highElfs} party="Ulthuan"/>
        <OriginElement logo={naggarond} party="Naggarond"/>
      </div>
    </div>
  )
};

export default (CheckboxPanel);