import React, { Component } from 'react';
import '../css/FormComponent.css';

class FormComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      compra: false,
      monto_is_valid: null,
      precio_is_valid: null
    }
  }

  changeBuySell(newAction) {
    this.setState({
      compra: newAction === 'buying' ? true : false
    })
  }

  render() {
    return (
      <div className="form_container">
        <div className="header">
          <h3>Crear orden</h3>
        </div>
        <div className="body">

          <div className="step_container">
            <span className="caption">Orden para:</span>
            <div className="buy_sell_container">
              <div className={`buying ${this.state.compra ? 'active' : ''}`} onClick={this.changeBuySell.bind(this, 'buying')}><span>Comprar</span></div>
              <div className={`selling ${this.state.compra ? '' : 'active'}`} onClick={this.changeBuySell.bind(this, 'selling')}><span>Vender</span></div>
            </div>
          </div>

          <div className="step_container">
            <span className="caption">Monto:</span>
            <div className="input_container">
              <div className="input">
                <input name="monto" type="text" />
                <span>BTC</span>
              </div>
              <div className="error"><span></span></div>
            </div>
          </div>

          <div className="step_container">
            <span className="caption">Precio:</span>
            <div className="input_container">
              <div className="input">
                <input name="precio" type="text" />
                <span>ARS</span>
              </div>
              <div className="error"><span></span></div>
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default FormComponent;
