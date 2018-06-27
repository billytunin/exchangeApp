import React from 'react';
import OrderStatusModalComponent from '../components/OrderStatusModalComponent.jsx';
import renderer from 'react-test-renderer';

let modalDataMock = {};

describe('Suite de tests del componente OrderStatusModalComponent', () => {
  beforeEach(() => {
    modalDataMock = {
      show: true,
      errorText: '',
      title: 'OrderStatusModalComponent test',
      type: 'comprar',
      amount: 1,
      price: 100000
    }
  })

  it('renderiza el componente sin errores y con las props iniciales', () => {
    const component = renderer.create(<OrderStatusModalComponent modalData={modalDataMock}></OrderStatusModalComponent>);
    const componentInstance = component.getInstance();

    expect(componentInstance.props.modalData.title).toEqual(modalDataMock.title);
    expect(componentInstance.props.modalData.type).toEqual(modalDataMock.type);
    expect(componentInstance.props.modalData.amount).toEqual(modalDataMock.amount);
    expect(componentInstance.props.modalData.price).toEqual(modalDataMock.price);
  });

  it('coincide con el último snapshot', () => {
    const component = renderer.create(<OrderStatusModalComponent modalData={modalDataMock}></OrderStatusModalComponent>);
    const JSONComponent = component.toJSON();

    expect(JSONComponent).toMatchSnapshot();
  });
})
