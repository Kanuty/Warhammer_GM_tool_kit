import React from 'react';
import './App.css';
import OriginPanel from './components/OriginPanel';
import QualityPanel from './components/QualityPanel';
import RadiosPanel from './components/RadiosPanel';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main">
        <div className="main__aside-left"/>
        <div className="main__viev-container">
          <div id="viev-container__shows">
            <div id="shows__viev"/>
            <div id="shows__nation"/>
          </div>
        <button onClick="res()">NEW RESULT</button>
        <div id="viev-container__setups">
          <QualityPanel/>
           <RadiosPanel
              containerClass = "setups__type"
              id={[4,5,6,7]}
              inputClass =  "type"
              name='type'
              value={["weapon", "armor", "utylity", "trash"]}
            />
            <OriginPanel/>
        {/* <div id="setups__general">
        </div> */}
      </div>
      </div>
      <div className="main__aside-right"/>
      </div>
    </div>
  );
}

export default App;
