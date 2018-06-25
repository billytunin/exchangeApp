import React from 'react';
import ReactDOM from 'react-dom';
import App from '../components/App.jsx';

it('renderiza el componente app sin errores', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
