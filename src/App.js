import React, { useState } from 'react';
import './App.css';
import OriginPanel from './components/OriginPanel';
import QualityPanel from './components/QualityPanel';
import ItemsPanel from './components/ItemsPanel';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const [qualityChange, setQualityChange] = useState([0,0,0,0]);
  const [randomResult, setRandomResult] = useState();

  function randomQuality () {
    let container = [];
    let i = 0
    while (i < qualityChange[0]){
      container.push("awfull")
      i++
    }
    i = 0
    while (i < qualityChange[1]){
      container.push("normall")
      i++
    }
    i = 0
    while (i < qualityChange[2]){
      container.push("exceptionall")
      i++
    }
    i = 0
    while (i < qualityChange[3]){
      container.push("perfect")
      i++
    }
    i = 0
    console.log(container);
    let result = container[Math.floor(Math.random() * container.length)];
    console.log(randomResult)
    setRandomResult(result)
  }


  function handleQualityChange(value) {
    setQualityChange(value);
  }

  return (
    <div className="App">
      <Header />
      <div className="main">
        <div className="main__aside-left"/>
        <div className="main__viev-container">
          <div id="viev-container__shows">
            <div id="shows__viev">
              <p>Quality:{qualityChange} {randomResult}</p>
            </div>
            <div id="shows__nation"/>
          </div>
        <button
          className="neutralButton"
          onClick={() => 
            randomQuality()
          }
        >
          NEW RESULT 
        </button>
        <div id="viev-container__setups">
          <QualityPanel onChange={handleQualityChange}/>
          <ItemsPanel />
          <OriginPanel />
        </div>
        </div>
        <div className="main__aside-right"/>
      </div>
      <Footer />
    </div>
  );
}

export default App;
