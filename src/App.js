import 'bootstrap/dist/css/bootstrap.min.css';
// import $ from 'jquery';
// import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';


import React, { Component } from 'react';
// import logo from './logo.svg';

import Header from './Components/Header'
import Content from './Components/Content'
import Footer from './Components/Footer'
import SpecialtySelector from './Components/SpecialtySelector/newSpecialtySelector'
import './App.css';

import { library } from '@fortawesome/fontawesome-svg-core'
import { faStar} from '@fortawesome/free-solid-svg-icons'

library.add(faStar)

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
        </div>
        <div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
