import React, { useEffect, useState } from 'react';
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

const OriginPanel = (props) => {
  const {

  } = props;
  const [bretonniaDisplay, setBretonniaDisplay] = useState(false);
  const [chaosDisplay, setChaosDisplay] = useState(true);
  const [empireDisplay, setEmpireDisplay] = useState(false);
  const [humanKingdomsDisplay, setHumanKingdomsDisplay] = useState(false);
  const [othersDisplay, setOtherDisplay] = useState(false);
  const toggleBretonniaDisplay = () => setBretonniaDisplay(!bretonniaDisplay);
  const toggleChaosDisplay = () => setChaosDisplay(!chaosDisplay);
  const toggleEmpireDisplay = () => setEmpireDisplay(!empireDisplay);
  const toggleHumanKingdomsDisplay = () => setHumanKingdomsDisplay(!humanKingdomsDisplay);
  const toggleOthersDisplay = () => setOtherDisplay(!othersDisplay);

  // To do: When at least one OriginElement is active, than toggle button change collor.

  const [valueOfBretonia , setValueOfBretonia] = useState(0);
  const [valueOfAquitaine , setValueOfAquitaine] = useState(0);
  const [valueOfArtois , setValueOfArtois] = useState(0);
  const [valueOfBastonne , setValueOfBastonne] = useState(0);
  const [valueOfBordeleaux , setValueOfBordeleaux] = useState(0);
  const [valueOfBrionne , setValueOfBrionne] = useState(0);
  const [valueOfCarcassonne , setValueOfCarcassonne] = useState(0);
  const [valueOfCouronne , setValueOfCouronne] = useState(0);
  const [valueOfCuileux , setValueOfCuileux] = useState(0);
  const [valueOfGisoreux , setValueOfGisoreux] = useState(0);
  const [valueOfGlanborielle , setValueOfGlanborielle] = useState(0);
  const [valueOfLanguillie , setValueOfLanguillie] = useState(0);
  const [valueOfLyonesse , setValueOfLyonesse] = useState(0);
  const [valueOfMontfort , setValueOfMontfort] = useState(0);
  const [valueOfMousillon , setValueOfMousillon] = useState(0);
  const [valueOfParravon , setValueOfParravon] = useState(0);
  const [valueOfQuenelles , setValueOfQuenelles] = useState(0);

  const [valueOfChaotic , setValueOfChaotic] = useState(0);
  const [valueOfNurlge , setValueOfNurgle] = useState(0);
  const [valueOfKhorne , setValueOfKhorne] = useState(0);
  const [valueOfTzeentch , setValueOfTzeentch] = useState(0);
  const [valueOfSlaanesh , setValueOfSlaanesh] = useState(0);
  const [valueOfSkaven , setValueOfSkaven] = useState(0);
  const [valueOfNorsca , setValueOfNorsca] = useState(0);
  const [valueOfBeastmen , setValueOfBeastmen] = useState(0);
  const [valueOfChaosdwarfs , setValueOfChaosdwarfs] = useState(0);

  const [valueOfImperium , setValueOfImperium] = useState(0);
  const [valueOfAverland , setValueOfAverland] = useState(0);
  const [valueOfHochland , setValueOfHochland] = useState(0);
  const [valueOfMiddenland , setValueOfMiddenland] = useState(0);
  const [valueOfNordland , setValueOfNordland] = useState(0);
  const [valueOfOstermark , setValueOfOstermark] = useState(0);
  const [valueOfOstland , setValueOfOstland] = useState(0);
  const [valueOfReikland , setValueOfReikland] = useState(0);
  const [valueOfSolland , setValueOfSolland] = useState(0);
  const [valueOfStirland , setValueOfStirland] = useState(0);
  const [valueOfSylvanic , setValueOfSylvanic] = useState(0);
  const [valueOfTalabecland , setValueOfTalabecland] = useState(0);
  const [valueOfWesterland , setValueOfWesterland] = useState(0);
  const [valueOfWissenland , setValueOfWissenland] = useState(0);
  const [valueOfThemoot , setValueOfThemoot] = useState(0);

  const [valueOfEstalia , setValueOfEstalia] = useState(0);
  const [valueOfKislev , setValueOfKislev] = useState(0);
  const [valueOfTilea , setValueOfTilea] = useState(0);
  const [valueOfBorderprinces , setValueOfBorderprinces] = useState(0);
  const [valueOfInd , setValueOfInd] = useState(0);
  const [valueOfArraby , setValueOfArraby] = useState(0);
  const [valueOfNippon , setValueOfNippon] = useState(0);
  const [valueOfCathay , setValueOfCathay] = useState(0);

  const [valueOfKhemri , setValueOfKhemri] = useState(0);
  const [valueOfDwarfs , setValueOfDwarfs] = useState(0);
  const [valueOfGreenskins , setValueOfGreenskins] = useState(0);
  const [valueOfLustria , setValueOfLustria] = useState(0);
  const [valueOfWoodelfs , setValueOfWoodelfs] = useState(0);
  const [valueOfHighelfs , setValueOfHighElfs] = useState(0);
  const [valueOfDarkelfs , setValueOfDarkElfs] = useState(0);
  const [valueOfOgres , setValueOfOgres] = useState(0);
  const [valueOfHobgoblins , setValueOfHobgoblins] = useState(0);
  const [valueOfAlbion , setValueOfAlbion] = useState(0);

  function handleChange () {
    props.onChange(
    [ valueOfBretonia,
      valueOfAquitaine,
      valueOfArtois,
      valueOfBastonne,
      valueOfBordeleaux,
      valueOfBrionne,
      valueOfCarcassonne,
      valueOfCouronne,
      valueOfCuileux,
      valueOfGisoreux,
      valueOfGlanborielle,
      valueOfLanguillie,
      valueOfLyonesse,
      valueOfMontfort,
      valueOfMousillon,
      valueOfParravon,
      valueOfQuenelles,
      
      valueOfChaotic,
      valueOfNurlge,
      valueOfKhorne,
      valueOfTzeentch,
      valueOfSlaanesh,
      valueOfSkaven,
      valueOfNorsca,
      valueOfBeastmen,
      valueOfChaosdwarfs,

      valueOfImperium,
      valueOfAverland,
      valueOfHochland,
      valueOfMiddenland,
      valueOfNordland,
      valueOfOstermark,
      valueOfOstland,
      valueOfReikland,
      valueOfSolland,
      valueOfStirland,
      valueOfSylvanic,
      valueOfTalabecland,
      valueOfWesterland,
      valueOfWissenland,
      valueOfThemoot,

      valueOfEstalia,
      valueOfKislev,
      valueOfTilea,
      valueOfBorderprinces,
      valueOfInd,
      valueOfArraby,
      valueOfNippon,
      valueOfCathay,

      valueOfKhemri,
      valueOfDwarfs,
      valueOfGreenskins,
      valueOfLustria,
      valueOfWoodelfs,
      valueOfHighelfs,
      valueOfDarkelfs,
      valueOfOgres,
      valueOfHobgoblins,
      valueOfAlbion
    ])
  }

  useEffect( () => {handleChange()}, 
  [ valueOfBretonia,
    valueOfAquitaine,
    valueOfArtois,
    valueOfBastonne,
    valueOfBordeleaux,
    valueOfBrionne,
    valueOfCarcassonne,
    valueOfCouronne,
    valueOfCuileux,
    valueOfGisoreux,
    valueOfGlanborielle,
    valueOfLanguillie,
    valueOfLyonesse,
    valueOfMontfort,
    valueOfMousillon,
    valueOfParravon,
    valueOfQuenelles,
    
    valueOfChaotic,
    valueOfNurlge,
    valueOfKhorne,
    valueOfTzeentch,
    valueOfSlaanesh,
    valueOfSkaven,
    valueOfNorsca,
    valueOfBeastmen,
    valueOfChaosdwarfs,

    valueOfImperium,
    valueOfAverland,
    valueOfHochland,
    valueOfMiddenland,
    valueOfNordland,
    valueOfOstermark,
    valueOfOstland,
    valueOfReikland,
    valueOfSolland,
    valueOfStirland,
    valueOfSylvanic,
    valueOfTalabecland,
    valueOfWesterland,
    valueOfWissenland,
    valueOfThemoot,

    valueOfEstalia,
    valueOfKislev,
    valueOfTilea,
    valueOfBorderprinces,
    valueOfInd,
    valueOfArraby,
    valueOfNippon,
    valueOfCathay,

    valueOfKhemri,
    valueOfDwarfs,
    valueOfGreenskins,
    valueOfLustria,
    valueOfWoodelfs,
    valueOfHighelfs,
    valueOfDarkelfs,
    valueOfOgres,
    valueOfHobgoblins,
    valueOfAlbion
  ]
  )

  return (
    <div className="panelBox">
      <h1>Origin</h1>
        <button 
          className="toggleButton" 
          onClick={toggleBretonniaDisplay}>
            { bretonniaDisplay? "Hide Bretonnia" : "Show Bretonnia" }
        </button>
        { bretonniaDisplay?
          <div id="BretonniaContainer">
            <OriginElement logo={bretonia} party="Bretonnia" onChange={setValueOfBretonia}/>
            <OriginElement party="Aquitaine" onChange={setValueOfAquitaine}/>
            <OriginElement party="Artois" onChange={setValueOfArtois}/>
            <OriginElement party="Bastonne" onChange={setValueOfBastonne}/>
            <OriginElement party="Bordeleaux" onChange={setValueOfBordeleaux}/>
            <OriginElement party="Brionne" onChange={setValueOfBrionne}/>
            <OriginElement party="Carcassonne" onChange={setValueOfCarcassonne}/>
            <OriginElement party="Couronne" onChange={setValueOfCouronne}/>
            <OriginElement party="Cuileux" onChange={setValueOfCuileux}/>
            <OriginElement party="Gisoreux" onChange={setValueOfGisoreux}/>
            <OriginElement party="Glanborielle" onChange={setValueOfGlanborielle}/>
            <OriginElement party="L'anguillie" onChange={setValueOfLanguillie}/>
            <OriginElement party="Lyonesse" onChange={setValueOfLyonesse}/>
            <OriginElement party="Montfort" onChange={setValueOfMontfort}/>
            <OriginElement party="Mousillon" onChange={setValueOfMousillon}/>
            <OriginElement party="Parravon" onChange={setValueOfParravon}/>
            <OriginElement party="Quenelles" onChange={setValueOfQuenelles}/>
          </div>
        :
          <div/>}

        <button 
          className="toggleButton" 
          onClick={toggleChaosDisplay}>
            { chaosDisplay? "Hide Chaos" : "Show Chaos" }
        </button>
        { chaosDisplay?
          <div id="chaosContainer">
            <OriginElement logo={chaotic} party="Chaos Undivided" onChange={setValueOfChaotic}/>
            <OriginElement logo={nurgle} party="Nurgle" onChange={setValueOfNurgle}/>
            <OriginElement logo={khorne} party="Khorne" onChange={setValueOfKhorne}/>
            <OriginElement logo={tzeentch} party="Tzeentch" onChange={setValueOfTzeentch}/>
            <OriginElement logo={slaanesh} party="Slaanesh" onChange={setValueOfSlaanesh}/>
            <OriginElement logo={skaven} party="Under Empire" onChange={setValueOfSkaven}/>
            <OriginElement logo={norsca} party="Norsca" onChange={setValueOfNorsca}/>
            <OriginElement logo={beastmen} party="Wildness" onChange={setValueOfBeastmen}/>
            <OriginElement logo={chaosDwarfs} party="Dark Lands" onChange={setValueOfChaosdwarfs}/>
          </div>
        : 
          <div/>}

        <button 
          className="toggleButton" 
          onClick={toggleEmpireDisplay}>
            { empireDisplay? "Hide Empire" : "Show Empire" }
        </button>
        { empireDisplay?
          <div id="EmpireContainer">
            <OriginElement logo={imperium} party="Empire" onChange={setValueOfImperium}/>
            <OriginElement party="Averland" onChange={setValueOfAverland}/>
            <OriginElement party="Hochland" onChange={setValueOfHochland}/>
            <OriginElement party="Middenland" onChange={setValueOfMiddenland}/>
            <OriginElement party="Nordland" onChange={setValueOfNordland}/>
            <OriginElement party="Ostermark" onChange={setValueOfOstermark}/>
            <OriginElement party="Ostland" onChange={setValueOfOstland}/>
            <OriginElement party="Reikland" onChange={setValueOfReikland}/>
            <OriginElement party="Solland" onChange={setValueOfSolland}/>
            <OriginElement party="Stirland" onChange={setValueOfStirland}/>
            <OriginElement logo={sylvanic} party="Sylvania" onChange={setValueOfSylvanic}/>
            <OriginElement party="Talabecland" onChange={setValueOfTalabecland}/>
            <OriginElement party="Westerland" onChange={setValueOfWesterland}/>
            <OriginElement party="Wissenland" onChange={setValueOfWissenland}/>
            <OriginElement party="The Moot" onChange={setValueOfThemoot}/>
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
            <OriginElement logo={estalia} party="Estalia" onChange={setValueOfEstalia}/>
            <OriginElement logo={kislev} party="Kislev" onChange={setValueOfKislev}/>
            <OriginElement logo={tilea} party="Tilea" onChange={setValueOfTilea}/>
            <OriginElement logo={border} party="Border Princedoms" onChange={setValueOfBorderprinces}/>
            <OriginElement party="Ind" onChange={setValueOfInd}/>
            <OriginElement party="Arraby" onChange={setValueOfArraby}/>
            <OriginElement party="Nippon" onChange={setValueOfNippon}/>
            <OriginElement party="Cathay" onChange={setValueOfCathay}/>
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
            <OriginElement logo={khemri} party="Khemri" onChange={setValueOfKhemri}/>
            <OriginElement logo={dwarfs} party="Worlds Edge Mountains" onChange={setValueOfDwarfs}/>
            <OriginElement logo={greenskins} party="Badlands" onChange={setValueOfGreenskins}/>
            <OriginElement logo={lustria} party="Lustria" onChange={setValueOfLustria}/>
            <OriginElement logo={woodElfs} party="Athel Loren" onChange={setValueOfWoodelfs}/>
            <OriginElement logo={highElfs} party="Ulthuan" onChange={setValueOfHighElfs}/>
            <OriginElement logo={naggarond} party="Naggarond" onChange={setValueOfDarkElfs}/>
            <OriginElement logo={ogres} party="Mountains of Mourn" onChange={setValueOfOgres}/>
            <OriginElement party="Eastern Steppes" onChange={setValueOfHobgoblins}/>
            <OriginElement party="Albion" onChange={setValueOfAlbion}/>
          </div>
        :
          <div/> }

    </div>
  )
};

export default (OriginPanel);