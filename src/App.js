import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div id="title-bar">
            <div id="title">
                <p> DndPlayer </p>
            </div>
            <div id="title-bar-btns">
                <button id="min-btn">-</button>
                <button id="max-btn">+</button>
                <button id="close-btn">x</button>
            </div>
        </div>
      </div>
    );
  }
}

export default App;
