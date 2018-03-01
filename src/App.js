import React, { Component } from 'react';
import './App.css';
import Map from './components/Map';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Map isMarkerShown />
      </div>
    );
  }
}

export default App;
