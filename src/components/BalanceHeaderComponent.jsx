import React, { Component } from 'react';
import constants from '../js/constants';

class BalanceHeaderComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ARS: 'cargando...'
    }
  }

  componentDidMount() {
    this.BTCtoARS();
  }

  componentDidUpdate(prevProps) {
    if (this.props.BTC !== prevProps.BTC) {
      this.BTCtoARS();
    }
  }

  BTCtoARS() {
    let currentComponent = this;
    fetch(constants.BTC_to_ARS_URL)
    .then(function(response) {
      return response.json();
    })
    .then(function(JSONResponse) {
      currentComponent.setState({
        ARS: currentComponent.props.BTC * JSONResponse.bpi.ARS.rate_float
      })
    });
  }

  formatNumber(number, isARS) {
    if ( typeof number !== 'number' ) {
      return 'cargando...';
    }
    if(isARS) {
      number = parseFloat(number).toFixed(2);
    } else {
      number = parseFloat(number).toFixed(7);
    }
    let parts = number.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
  }

  render() {
    return (
      <div className="balance_header">
        <span className="info">Balance actual:</span>
        <div className="currency_container">
          <div className="container">
            <span className="amount">{this.formatNumber(this.state.ARS, true)}</span>
            <span className="currency">ARS</span>
          </div>
          <div className="container">
            <span className="amount">{this.formatNumber(this.props.BTC)}</span>
            <span className="currency">BTC</span>
          </div>
        </div>
      </div>
    );
  }
}

export default BalanceHeaderComponent;
