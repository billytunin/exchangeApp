import React, { Component } from 'react';
import logo from '../assets/logo.svg';
import '../css/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Bienvenido a Exchange App</h1>
        </header>
        <p className="App-intro">
          Código dedicado a la solución del ejercicio técnico de Rippio
        </p>
      </div>
    );
  }
}

export default App;
