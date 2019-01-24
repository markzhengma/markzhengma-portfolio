import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className='background-img'></div>
        <Header/>
      </div>
    );
  }
}

export default App;
