import React, { render } from 'react';

render(
  <h1><p>module/b.js executed, using {React.version}</p></h1>,
  global.document.getElementById('App2'),
);

export default () => {};
