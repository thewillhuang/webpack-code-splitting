import React, { render } from 'react';

render(
  <h1><p>module/c.js executed, using {React.version}</p></h1>,
  global.document.getElementById('App3'),
);

export default () => {};
