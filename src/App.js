import React, { Component } from 'react';
import Header from './components/header'
import Banner from './components/banner'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Banner source="http://localhost:3000/data/swiper" />
      </div>
    );
  }
}

export default App;
