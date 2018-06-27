import React from 'react';
import BalanceHeaderComponent from '../components/BalanceHeaderComponent.jsx';
import renderer from 'react-test-renderer';

describe('Suite de tests del componente BalanceHeaderComponent', () => {
  beforeEach(() => {
    fetch.mockResponse(JSON.stringify({ bpi: { ARS: { rate_float: 2 } } }));
  })

  it('renderiza el componente y el estado inicial sin errores', () => {
    const component = renderer.create(<BalanceHeaderComponent></BalanceHeaderComponent>);
    const componentInstance = component.getInstance();

    expect(componentInstance).toBeDefined();
    expect(componentInstance.state.ARS).toEqual('cargando...');
  });

  it('formatNumber devuelve un numero con el formato esperado dependiendo si son BTC o ARS', () => {
    const component = renderer.create(<BalanceHeaderComponent></BalanceHeaderComponent>);
    const componentInstance = component.getInstance();

    // Si fueran ARS
    let result = componentInstance.formatNumber(100000.123123, true);
    expect(result).toEqual('100,000.12');

    // Si fueran BTC
    result = componentInstance.formatNumber(0.999123123);
    expect(result).toEqual('0.9991231');
  });
})
