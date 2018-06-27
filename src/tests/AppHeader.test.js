import React from 'react';
import AppHeader from '../components/AppHeader.jsx';
import renderer from 'react-test-renderer';

describe('Suite de tests del componente AppHeader', () => {
  it('renderiza el componente sin errores', () => {
    const component = renderer.create(<AppHeader></AppHeader>);
    const componentInstance = component.getInstance();

    expect(componentInstance).toBeDefined();
  });

  it('matchea el ultimo snapshot de AppHeader', () => {
    const component = renderer.create(<AppHeader></AppHeader>);
    const JSONComponent = component.toJSON();

    expect(JSONComponent).toMatchSnapshot();
  });
})
