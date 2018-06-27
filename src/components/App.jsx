import React, { Component } from 'react';
import AppHeader from './AppHeader.jsx';
import BalanceHeaderComponent from './BalanceHeaderComponent.jsx';
import FormComponent from './FormComponent.jsx';
import OrderStatusModalComponent from './OrderStatusModalComponent.jsx';
import order from '../js/order';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      BTC: 0.624122,
      modalData: {
        show: false,
        type: 'vender',
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
        return response;
      } else {
        this.handleOrderError(response);
      }
    }, (error) => {
      this.handleOrderError(error);
    });
  }

  handleOrderError(errorObject) {
    let errorText = order.handleOrderError(errorObject);
    this.setState({
      modalData: {
        show: true,
        title: 'Error al enviar orden',
        errorText: errorText
      }
    });
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
        <OrderStatusModalComponent modalData={this.state.modalData} toggleModal={this.toggleModal.bind(this)}></OrderStatusModalComponent>
      </div>
    );
  }
}

export default App;
