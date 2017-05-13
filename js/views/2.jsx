import React from 'react';
import { render } from 'react-dom';
import b from './../modules/b';
import c from './../modules/c';

render(
  <h1><p>views/2.js loaded, using {React.version}</p></h1>,
  global.document.getElementById('App5'),
);

export default () => {};
