import React, { useEffect, useState } from 'react';
import './App.css';

import Footer from './components/Footer';
import ItemsPanel from './components/ItemsPanel';
import Header from './components/Header';
import OriginPanel from './components/OriginPanel';
import QualityPanel from './components/QualityPanel';
import ShowResult from './components/ShowResult';

import  { qualityColection, itemColection, originColection } from './constants/arrays';
import  {  mele, ranged, armor, potion, general, treasure, food, clothes, tools  } from './constants/itemsVault';

function App() {
  const [qualityChange, setQualityChange] = useState([]);
  const [qualityRandom, setQualityRandom] = useState();
  const [itemChange, setItemChange] = useState([]);
  const [itemRandom, setItemRandom] = useState();
  const [originChange, setOriginChange] = useState([]);
  const [originRandom, setOriginRandom] = useState();
  const [indexOfItem, setIndexOfItem] = useState(0);

  const collection = [ mele, ranged, armor, potion, general, treasure, food, clothes, tools ]

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
    let result = container[Math.floor(Math.random() * container.length)];
    func(result)

  }

  function indexOfRandomItem (collectionOfItems) {
    setIndexOfItem(Math.floor(Math.random() * collectionOfItems.length))
  };

  const togetherRandom = () => {
    randomInputsResult(qualityChange, qualityColection, setQualityRandom)
    randomInputsResult(itemChange, itemColection, setItemRandom)
    randomInputsResult(originChange, originColection, setOriginRandom)
    setIndexOfItem(0)
  }

  useEffect( () => {    chooseItem()}, 
    [
      togetherRandom
    ]
  ) 

  function chooseItem(){
    if (itemRandom === itemColection[0]) {indexOfRandomItem(collection[0])}
    if (itemRandom === itemColection[1]) {indexOfRandomItem(collection[1])}
    if (itemRandom === itemColection[2]) {indexOfRandomItem(collection[2])}
    if (itemRandom === itemColection[3]) {indexOfRandomItem(collection[3])}
    if (itemRandom === itemColection[4]) {indexOfRandomItem(collection[4])}
    if (itemRandom === itemColection[5]) {indexOfRandomItem(collection[5])}
    if (itemRandom === itemColection[6]) {indexOfRandomItem(collection[6])}
    if (itemRandom === itemColection[7]) {indexOfRandomItem(collection[7])}
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
