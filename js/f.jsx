import React from 'react';
import { render } from 'react-dom';

console.log(React.version);
render(
  <h1><p>f.js loaded, using {React.version}</p></h1>,
  global.document.getElementById('App7'),
);
