import React, { Component } from 'react';
import logo from '../assets/logo.svg';
import '../css/App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <header className="app-header">
          <img src={logo} className="app-logo" alt="logo" />
          <h1 className="app-title">Bienvenido a Exchange App</h1>
        </header>
        <p className="app-intro">
          Código dedicado a la solución del ejercicio técnico de Rippio
        </p>
      </div>
    );
  }
}

export default App;
