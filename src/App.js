import React, { Component } from 'react';
import Header from './components/header'
import Banner from './components/banner'
import Nav from './components/nav'
import SecondsKill from './components/secondsKill'
import AsloLike from './components/asloLike'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Banner source="http://localhost:3000/data/swiper" />
        <Nav source="http://localhost:3000/data/otherapp" />
        <SecondsKill source="http://localhost:3000/data/spike" />
        <AsloLike source="http://localhost:3000/data/like"/>
      </div>
    );
  }
}

export default App;
