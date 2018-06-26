import React, { Component } from 'react';
import logo from '../assets/logo.svg';

class AppHeader extends Component {
  render() {
    return (
      <header className="app-header">
        <img src={logo} className="app-logo" alt="logo" />
        <h1 className="app-title">Bienvenido a Exchange App</h1>
      </header>
    );
  }
}

export default AppHeader;
