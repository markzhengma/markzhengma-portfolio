import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import About from './Components/About';
import Work from './Components/Work';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className='background-img'></div>
        <Header/>
        <Home/>
        <About/>
        <Work/>
      </div>
    );
  }
}

export default App;
