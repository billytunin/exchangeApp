import React, { Component } from 'react';
import logo from '../assets/logo.svg';
import '../css/App.css';
import BalanceHeaderComponent from './BalanceHeaderComponent.jsx';
import FormComponent from './FormComponent.jsx';

class App extends Component {
  render() {
    return (
      <div className="app">
        <BalanceHeaderComponent BTC={0.624122}></BalanceHeaderComponent>
        <div className="app-container">
          <header className="app-header">
            <img src={logo} className="app-logo" alt="logo" />
            <h1 className="app-title">Bienvenido a Exchange App</h1>
          </header>
          <FormComponent></FormComponent>
        </div>
      </div>
    );
  }
}

export default App;
