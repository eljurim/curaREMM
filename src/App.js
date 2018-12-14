import React, { Component } from 'react';
// import logo from './logo.svg';

import Header from './Components/Header'
import Content from './Components/Content'
import Tarjeta from './Components/Tarjeta'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Header />
        </header>
        <div className="App-content">
          <Content />
        </div>

        <div className="App-tarjeta">
          <Tarjeta />
        </div>
      </div>
    );
  }
}

export default App;
