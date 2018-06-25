import React, { Component } from 'react';
import '../css/App.css';
import AppHeader from './AppHeader.jsx';
import BalanceHeaderComponent from './BalanceHeaderComponent.jsx';
import FormComponent from './FormComponent.jsx';
import OrderSentModalComponent from './OrderSentModalComponent.jsx';
import order from '../js/order';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      BTC: 0.624122,
      modalData: {
        show: false,
        type: 'comprar',
        amount: 0,
        price: 0,
        errorText: ''
      }
    }
  }

  sendOrder(buying, amount, price) {
    return order.send(buying, amount, price).then((response) => {
      if ( response.status === 200 ) {
        let current_amount = this.state.BTC;
        response.payload.buying ? this.setState({ BTC: current_amount + response.payload.amount }) : this.setState({ BTC: current_amount - response.payload.amount });
        this.setState({
          modalData: {
            show: true,
            title: 'Orden enviada correctamente',
            type: response.payload.buying ? 'comprar' : 'vender',
            amount: response.payload.amount,
            price: response.payload.price,
            errorText: ''
          }
        });
      } else {
        // Ocurrio un problema
      }
    }, (error) => {
      switch(error.status){
        case 400:
          // Invalid data
        break;

        case 500:
          // Error en el server
        break;

        case 403:
          // No autorizado
        break;

        default:
          // Ocurrio un problema
        break;
      }
    });
    // 
  }

  toggleModal() {
    this.setState({
      modalData: {
        show: !this.state.modalData.show
      }
    })
  }

  render() {
    return (
      <div className="app">
        <BalanceHeaderComponent BTC={this.state.BTC}></BalanceHeaderComponent>
        <div className="app-container">
          <AppHeader></AppHeader>
          <FormComponent sendOrder={this.sendOrder.bind(this)}></FormComponent>
        </div>
        <OrderSentModalComponent modalData={this.state.modalData} toggleModal={this.toggleModal.bind(this)}></OrderSentModalComponent>
      </div>
    );
  }
}

export default App;
