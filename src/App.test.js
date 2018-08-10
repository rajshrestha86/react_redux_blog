import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {shallow} from 'enzyme';

it('renders without crashing', () => {
  const component=shallow(<App/>);
  expect(component.exists()).toEqual(true);
  
  
});
