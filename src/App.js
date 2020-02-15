import React from 'react';
import './App.css';
import Header from './components/Header'
import WarhammerLogo from './img/WarhammerLogo.png'

function App() {
  return (
    <div className="App">
      <Header />
      <div class="main">
        <div class="main__aside-left">
        </div>
        <div class="main__viev-container">
          <div id="viev-container__shows">
            <div id="shows__viev">
            </div>
              <div id="shows__nation">
              </div>
          </div>
        <button onclick="res()">NEW RESULT</button>
        <div id="viev-container__setups">
          <div id="setups__rarity">
            <div class="rarity" >
              <input 
                type="radio"
                name="rarity"
                id="1"
                value="common"
                checked
              />
              <label class="1">Common</label>
            </div>
            <div class="rarity" >
              <input 
                type="radio"
                name="rarity"
                id="2"
                value="rare"
              />
              <label class="1">Rare</label>
            </div>
            <div class="rarity" >
              <input
                type="radio"
                name="rarity"
                id="3"
                value="epic"
              />
              <label class="1">Epic</label>
            </div>
            <div class="rarity" >
              <input
              type="radio"
              name="rarity"
              id="4"
              value="legendary"
            />
              <label class="1">Legendary</label>
            </div>
          </div>
        <div id="setups__type">
          <div class="type" >
            <input
              type="radio"
              name="type"
              id="5"
              value="weapon"
              checked/>
            <label class="1">Weapon</label>
          </div>
          <div class="type" >
            <input
              type="radio"
              name="type"
              id="6"
              value="armor"/>
          <label class="1">Armor</label>
          </div>
          <div class="type" >
            <input
              type="radio"
              name="type"
              id="7"
              value="utility"/>
            <label class="1">Utility</label>
          </div>
          <div class="type" >
            <input
            type="radio"
            name="type"
            id="8"
            value="trash"/>
            <label class="1">Trash</label>
          </div>
        </div>
        <div id="setups__general">
        </div>
      </div>
      </div>
      <div class="main__aside-right"></div>
      </div>
    </div>
  );
}

export default App;
