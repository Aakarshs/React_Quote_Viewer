import React, { Component } from 'react';
import './App.css';
import Header from './quotes.js';

class App extends Component {
  render() {
    return (
      <div className="app">
         
          <div className="circle"> <Header /> </div>
          <div className = "bg"></div>
      </div>
    );
  }
}

export default App;
