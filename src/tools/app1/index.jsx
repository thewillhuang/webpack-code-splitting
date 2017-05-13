import React from 'react';
import { render } from 'react-dom';
import Example from './example';
import A from '../../shared/a';
import B from '../../shared/b';

render(
  <h3>
    <p>App1 loaded, using {React.version}</p>
    <Example />
    <A />
    <B />
  </h3>,
  global.document.getElementById('App1'),
);
