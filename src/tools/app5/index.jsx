import React from 'react';
import { render } from 'react-dom';
import Example from './example';
import A from '../../shared/a';
import B from '../../shared/b';

render(
  <h1>
    <p>App1 loaded, using React version {React.version} and children loaded with another version of react</p>
    <Example />
    <A />
    <B />
    ----------------------------------------
  </h1>,
  global.document.getElementById('App5'),
);
