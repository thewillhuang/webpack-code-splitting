import React from 'react';
import { render } from 'react-dom';
import BasicExample from './router';

render(
  <div><h1><p>main.js loaded, using {React.version}</p></h1><BasicExample />
  </div>,
  global.document.getElementById('App'),
);

import('./views/1').then((module) => {
  console.log('./views/1 loaded');
}).catch(e => console.log(e));

import('./views/2').then((module) => {
  console.log('./views/2 loaded');
}).catch(e => console.log(e));
