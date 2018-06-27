import React from 'react';
import FormComponent from '../components/FormComponent.jsx';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';

describe('Suite de tests del componente FormComponent', () => {
  it('renderiza el componente sin errores y con el estado inicial esperado', () => {
    const component = renderer.create(<FormComponent></FormComponent>);
    const componentInstance = component.getInstance();

    expect(componentInstance.state.compra).toEqual(false);
    expect(componentInstance.state.monto_validity).toEqual('');
    expect(componentInstance.state.precio_validity).toEqual('');
    expect(componentInstance.state.form_validity).toEqual('is_invalid');
    expect(componentInstance.state.loading).toEqual(false);
  });

  it('changeBuySell cambia el estado correctamente', () => {
    const component = mount(<FormComponent></FormComponent>);

    expect(component.state('compra')).toEqual(false);
    component.find('.buy_sell_container .buying').simulate('click');
    expect(component.state('compra')).toEqual(true);
  });

  it('la funcion "validate" valida el estado del form de manera esperada', () => {
    const component = renderer.create(<FormComponent></FormComponent>);
    const componentInstance = component.getInstance();


    let eventMock = {
      target: {
        value: 'test'
      }
    }
    expect(componentInstance.state.monto_validity).toEqual('');
    componentInstance.validate(eventMock, 'invalid_monto_message', 'monto_validity');
    expect(componentInstance.state.monto_validity).toEqual('is_invalid');

    eventMock.target.value = 1;
    componentInstance.validate(eventMock, 'invalid_monto_message', 'monto_validity');
    expect(componentInstance.state.monto_validity).toEqual('is_valid');

    componentInstance.validate(eventMock, 'invalid_precio_message', 'precio_validity');
    expect(componentInstance.state.precio_validity).toEqual('is_valid');

    // Una vez que ambos precio y monto son validos, el form deberia ser valido
    expect(componentInstance.state.form_validity).toEqual('is_valid');
  });
})
