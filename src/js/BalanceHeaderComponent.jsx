import React, { Component } from 'react';
import '../css/BalanceHeaderComponent.css';
import constants from '../constants';

class BalanceHeaderComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      BTC: parseFloat(this.props.BTC),
      ARS: 'cargando...'
    }
  }

  componentDidMount() {
    let currentComponent = this;
    fetch(constants.BTC_to_ARS_URL)
    .then(function(response) {
      return response.json();
    })
    .then(function(JSONResponse) {
      currentComponent.setState({
        ARS: currentComponent.state.BTC * JSONResponse.bpi.ARS.rate_float
      })
    });
  }

  formatearNumero(number, isARS) {
    if ( typeof number !== 'number' ) {
      return 'cargando...';
    }
    if(isARS) number = parseFloat(number).toFixed(2);
    let parts = number.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
  }

  render() {
    return (
      <div className="balance_header">
        <span className="info">Balance actual:</span>
        <div className="container">
          <span className="amount">{this.formatearNumero(this.state.ARS, true)}</span>
          <span className="currency">ARS</span>
        </div>
        <div className="container">
          <span className="amount">{this.formatearNumero(this.state.BTC)}</span>
          <span className="currency">BTC</span>
        </div>
      </div>
    );
  }
}

export default BalanceHeaderComponent;
