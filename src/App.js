import React, { Component } from 'react';
import './App.css';

import Navbar from "./Components/Navbar/Navbar"
import Jumbotron from './Components/Jumbotron/Jumbotron';
import Characters from './Components/Characters/Characters';
import Footer from './Components/Footer/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
        <Jumbotron/>
        <div className="container">
          <Characters/>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default App;
