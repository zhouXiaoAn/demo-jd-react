import React, { Component } from 'react';
import Header from './components/header'
import Banner from './components/banner'
import Nav from './components/nav'
import SecondsKill from './components/secondsKill'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Banner source="http://localhost:3000/data/swiper" />
        <Nav source="http://localhost:3000/data/otherapp" />
        <SecondsKill />
      </div>
    );
  }
}

export default App;
