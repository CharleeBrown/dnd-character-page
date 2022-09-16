import React from 'react';
import ReactDOM from 'react-dom';
import ClassPick from './ClassPick';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ClassPick />, div);
  ReactDOM.unmountComponentAtNode(div);
});