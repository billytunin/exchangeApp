import React, { Component } from 'react';
import SpinnerComponent from './SpinnerComponent.jsx';

class FormComponent extends Component {
  constructor(props) {
    super(props);
    this.initialState = {
      compra: false,
      monto_validity: '',
      precio_validity: '',
      invalid_monto_message: '',
      invalid_precio_message: '',
      form_validity: 'is_invalid',
      loading: false
    }
    this.state = this.initialState
  }

  changeBuySell(newAction) {
    this.setState({
      compra: newAction === 'buying' ? true : false
    })
  }

  validate(event, errorMessageKey, cssClassKey){
    let numb_regex = /^[0-9.,]+$/;
    let value = event.target.value;
    let obj = {};
    if ( value === '' ) {
      obj[errorMessageKey] = 'Este campo es requerido';
    } else {
      obj[errorMessageKey] = numb_regex.test(value) ? '' : 'Este campo debe ser un numero valido';
    }

    if ( obj[errorMessageKey] === '' ) {
      obj[cssClassKey] = 'is_valid';
    } else {
      obj[cssClassKey] = 'is_invalid';
    }

    let currentComponent = this;
    this.setState(obj, () => {
      let form_validity = (this.state.monto_validity === 'is_valid' && this.state.precio_validity === 'is_valid') ? 'is_valid' : 'is_invalid';
      currentComponent.setState({
        form_validity: form_validity
      });
    });
  }

  sendOrder(){
    let currentComponent = this;
    currentComponent.setState({ loading: true });
    this.props.sendOrder(this.state.compra, this.monto_input.value, this.precio_input.value).then((response) => {
      if(response && response.status === 200){
        this.monto_input.value = '';
        this.precio_input.value = '';
        this.setState(this.initialState);
      }
    }).finally(() => {
      currentComponent.setState({ loading: false });
    });
  }

  render() {
    return (
      <div className="form_container">
        <div className="header">
          <h3>Crear orden</h3>
        </div>
        <div className="body">

          <div className={`steps_container ${this.state.loading ? 'hide' : 'show'}`}>
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
                  <input 
                  name="monto"
                  type="text"
                  className={this.state.monto_validity}
                  onChange={(event) => this.validate(event, 'invalid_monto_message', 'monto_validity')}
                  ref={(input) => this.monto_input = input}
                  />
                  <span>BTC</span>
                </div>
                <div className="error"><span>{this.state.invalid_monto_message}</span></div>
              </div>
            </div>

            <div className="step_container">
              <span className="caption">Precio:</span>
              <div className="input_container">
                <div className="input">
                  <input
                  name="precio"
                  type="text"
                  className={this.state.precio_validity}
                  onChange={(event) => this.validate(event, 'invalid_precio_message', 'precio_validity')}
                  ref={(input) => this.precio_input = input}
                  />
                  <span>ARS</span>
                </div>
                <div className="error"><span>{this.state.invalid_precio_message}</span></div>
              </div>
            </div>

            <div className="step_container enviar">
              <button disabled={this.state.form_validity === 'is_valid' ? false : true} onClick={this.sendOrder.bind(this)}>Enviar</button>
            </div>
          </div>

          <SpinnerComponent show={this.state.loading}></SpinnerComponent>

        </div>
      </div>
    );
  }
}

export default FormComponent;
