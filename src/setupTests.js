// Iniciar el mock de la funcion fetch para todos los tests
global.fetch = require('jest-fetch-mock')

// Configuraciones iniciales de Enzyme
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });