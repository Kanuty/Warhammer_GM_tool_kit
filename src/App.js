import React, { useState } from 'react';
import './App.css';

import Footer from './components/Footer';
import ItemsPanel from './components/ItemsPanel';
import Header from './components/Header';
import OriginPanel from './components/OriginPanel';
import QualityPanel from './components/QualityPanel';
import ShowResult from './components/ShowResult';

import  { qualityColection, itemColection, originColection } from './constants/arrays';
import  { mele, ranged, armor } from './constants/itemsVault';

function App() {
  const [qualityChange, setQualityChange] = useState([]);
  const [qualityRandom, setQualityRandom] = useState();
  const [itemChange, setItemChange] = useState([]);
  const [itemRandom, setItemRandom] = useState();
  const [originChange, setOriginChange] = useState([]);
  const [originRandom, setOriginRandom] = useState();
  const [indexOfItem, setIndexOfItem] = useState(0);

  const collection = [mele, ranged, armor]

  function randomInputsResult (toRandom, nameColection, func) {
    const container = [];
    let i = 0
      for (let x = -1 ; x < toRandom.length ; x++){
        while (i < toRandom[x]){
          container.push(nameColection[x])
          i++
        }
        i = 0
      }
    console.log(container);
    let result = container[Math.floor(Math.random() * container.length)];
    func(result)

    if (func === setItemRandom){

      console.log("result:", result)
    }
  }

  function indexOfRandomItem (input) {
    console.log("input:",input)
      setIndexOfItem(Math.floor(Math.random() * input.length))
      console.log("indexOfItem:",indexOfItem)
  };

  const togetherRandom = () => {
    randomInputsResult(qualityChange, qualityColection, setQualityRandom)
    randomInputsResult(itemChange, itemColection, setItemRandom)
    randomInputsResult(originChange, originColection, setOriginRandom)
    deley()
  }

  function deley () {
    if (itemRandom == itemColection[0]) {indexOfRandomItem(collection[0])}
    if (itemRandom == itemColection[1]) {indexOfRandomItem(collection[1])}
    if (itemRandom == itemColection[2]) {indexOfRandomItem(collection[2])}
    // if (itemRandom = "mele") {indexOfRandomItem(mele)}
    // if (itemRandom = "mele") {indexOfRandomItem(mele)}
    // if (itemRandom = "mele") {indexOfRandomItem(mele)}
    // if (itemRandom = "mele") {indexOfRandomItem(mele)}
  }

  return (
    <div className="App">
      <Header />
      <div className="main">
        <div className="main__aside-left"/>
        <div className="main__viev-container">
          <div id="viev-container__shows">
            <div id="shows__viev">
              <ShowResult 
                quality={qualityRandom}
                itemType={itemRandom}
                origin={originRandom}
                indexOfItem={indexOfItem}
              />
            </div>
            <div id="shows__nation"/>
          </div>
        <button
          className="neutralButton"
          onClick={() => 
            togetherRandom()
          }
        >
          NEW RESULT 
        </button>
        <div id="viev-container__setups">
          <QualityPanel onChange={setQualityChange}/>
          <ItemsPanel onChange={setItemChange}/>
          <OriginPanel onChange={setOriginChange}/>
        </div>
        </div>
        <div className="main__aside-right"/>
      </div>
      <Footer />
    </div>
  );
}

export default App;
