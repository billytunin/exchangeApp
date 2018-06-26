import React, { Component } from 'react';

class OrderStatusModalComponent extends Component {

  render() {
    return (
      <div className={`modal_wrapper ${this.props.modalData.show ? 'show' : 'hide'}`}>
        <div className="modal_container">
          <h2 className="title">{this.props.modalData.title}</h2>
          <div className={`body ${this.props.modalData.errorText === '' ? 'show' : 'hide'}`}>
            <p className="detalle">DETALLE:</p>
            <p className="buying caption">ORDEN PARA</p>
            <p className="buying value">{this.props.modalData.type}</p>
            <p className="monto caption">MONTO A {this.props.modalData.type}:</p>
            <p className="monto value">{this.props.modalData.amount}</p>
            <p className="precio caption">PRECIO POR CADA BTC:</p>
            <p className="precio value">{this.props.modalData.price}</p>

            <p className="notice">(AVISO: Para la finalidad de esta demo, las ordenes se aceptarán automaticamente y, por lo tanto, su balance se actualizará al instante)</p>
          </div>

          <p className={`errorText ${this.props.modalData.errorText === '' ? 'hide' : 'show'}`}>{this.props.modalData.errorText}</p>
          
          <button onClick={this.props.toggleModal}>OK</button>
          
        </div>
      </div>
    );
  }
}

export default OrderStatusModalComponent;
