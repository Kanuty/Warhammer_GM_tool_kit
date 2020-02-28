import React from 'react';
import './App.css';
import OriginPanel from './components/OriginPanel';
import QualityPanel from './components/QualityPanel';
import ItemsPanel from './components/ItemsPanel';
import Header from './components/Header';

function App() {

  const res = () => console.log(1+1)

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
        <button
          className="neutralButton"
          onClick={res}
        >
          NEW RESULT
        </button>
        <div id="viev-container__setups">
          <QualityPanel/>
          <ItemsPanel/>
          <OriginPanel/>
        </div>
        </div>
        <div className="main__aside-right"/>
      </div>
    </div>
  );
}

export default App;
