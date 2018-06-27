import React from 'react';
import App from '../components/App.jsx';
import renderer from 'react-test-renderer';

jest.mock('../js/order.js');

describe('Suite de tests del componente App', () => {
  beforeEach(() => {
    fetch.mockResponse(JSON.stringify({ bpi: { ARS: { rate_float: 2 } } }));
  })

  it('renderiza el componente app sin errores', () => {
    const component = renderer.create(<App></App>);
    const componentInstance = component.getInstance();
    expect(componentInstance.state.BTC).toBeDefined();
    expect(componentInstance.state.modalData).toBeDefined();
  });

  it('toggleModal cambia el estado y muestra o esconde el modal', () => {
    const component = renderer.create(<App></App>);
    const componentInstance = component.getInstance();

    componentInstance.toggleModal();
    expect(componentInstance.state.modalData.show).toEqual(true);

    componentInstance.toggleModal();
    expect(componentInstance.state.modalData.show).toEqual(false);
  });

  it('sendOrder (caso exitoso) cambia el estado y envia la data correcta al modal', () => {
    const component = renderer.create(<App></App>);
    const componentInstance = component.getInstance();

    expect(componentInstance.state.modalData.show).toEqual(false);
    expect(componentInstance.state.modalData.amount).toEqual(0);
    expect(componentInstance.state.modalData.price).toEqual(0);
    return new Promise((resolve, reject) => {
      componentInstance.sendOrder(true, 15, 10).then((resp) => {
        expect(componentInstance.state.modalData.show).toEqual(true);
        expect(componentInstance.state.modalData.amount).toEqual(15);
        expect(componentInstance.state.modalData.price).toEqual(10);
        resolve();
      });
    })

  });

  it('sendOrder (caso fallido) cambia el estado y envia la data correcta al modal', () => {
    const component = renderer.create(<App></App>);
    const componentInstance = component.getInstance();

    expect(componentInstance.state.modalData.show).toEqual(false);
    expect(componentInstance.state.modalData.amount).toEqual(0);
    expect(componentInstance.state.modalData.price).toEqual(0);
    return new Promise((resolve, reject) => {
      componentInstance.sendOrder(true, 'string', 'deberia ser un numero').then((resp) => {
        expect(componentInstance.state.modalData.amount).toBeUndefined();
        expect(componentInstance.state.modalData.price).toBeUndefined();
        expect(componentInstance.state.modalData.errorText).toEqual('Los datos enviados para generar la orden son invalidos');
        resolve();
      });
    })

  });

})
