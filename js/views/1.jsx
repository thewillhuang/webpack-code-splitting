import React from 'react';
import { render } from 'react-dom';
import a from './../modules/a';
import b from './../modules/b';

render(
  <h1><p>views/1.js loaded, using {React.version}</p></h1>,
  document.getElementById('App4')
);

export default () => {}
