import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className='background-img'></div>
        <Header/>
        <Home/>
      </div>
    );
  }
}

export default App;
