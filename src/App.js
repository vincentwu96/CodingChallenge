import React, { Component } from 'react';
import CostbyServiceType from './Components/CostbyServiceType.js';
import CumulativeCost from './Components/CumulativeCost.js';
import TopRepairsByCost from './Components/TopRepairsByCost.js';
import TopRepairsByTime from './Components/TopRepairsByTime.js';
import DisplayData from './Components/DisplayData.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <CostbyServiceType />
        <CumulativeCost />
        <TopRepairsByCost />
        <TopRepairsByTime />
        <DisplayData />
      </div>
    );
  }
}

export default App;
