import React from 'react';
import SpinnerComponent from '../components/SpinnerComponent.jsx';
import renderer from 'react-test-renderer';

describe('Suite de tests del componente SpinnerComponent', () => {

  it('renderiza el componente sin errores y con las props iniciales', () => {
    const component = renderer.create(<SpinnerComponent show={true}></SpinnerComponent>);
    const componentInstance = component.getInstance();

    expect(componentInstance.props.show).toEqual(true);
  });

  it('coincide con el último snapshot', () => {
    const component = renderer.create(<SpinnerComponent></SpinnerComponent>);
    const JSONComponent = component.toJSON();

    expect(JSONComponent).toMatchSnapshot();
  });
})
