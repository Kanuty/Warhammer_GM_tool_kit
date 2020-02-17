import React from 'react';
import './App.css';
// import Checkboxinput from './components/Checkboxinput'
import RadiosPanel from './components/RadiosPanel'
import Header from './components/Header'

function App() {
  return (
    <div className="App">
      <Header />
      <div class="main">
        <div class="main__aside-left"/>
        <div class="main__viev-container">
          <div id="viev-container__shows">
            <div id="shows__viev"/>
            <div id="shows__nation"/>
          </div>
        <button onclick="res()">NEW RESULT</button>
        <div id="viev-container__setups">
          <RadiosPanel
            id={[0,1,2,3]}
            name='rarity'
            value={["common", "uncommon", "rare", "epic"]}
            />

           <RadiosPanel
              containerClass = "setups__type"
              id={[4,5,6,7]}
              inputClass =  "type"
              name='type'
              value={["weapon", "armor", "utylity", "trash"]}
            />
            {/* <Checkboxinput></Checkboxinput> */}
        <div id="setups__general">
        </div>
      </div>
      </div>
      <div class="main__aside-right"/>
      </div>
    </div>
  );
}

export default App;
